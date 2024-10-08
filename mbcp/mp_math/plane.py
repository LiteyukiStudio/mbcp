# -*- coding: utf-8 -*-
"""
本模块定义了三维空间中的平面类
"""
import math
from typing import TYPE_CHECKING, overload

import numpy as np

from .line import Line3
from .point import Point3
from .utils import approx, sign
from .vector import Vector3, zero_vector3

if TYPE_CHECKING:
    from .angle import AnyAngle


class Plane3:
    def __init__(self, a: float, b: float, c: float, d: float):
        """
        平面方程：ax + by + cz + d = 0
        Args:
            a ([`float`](https%3A//docs.python.org/3/library/functions.html#float)): x系数
            b (`float`): y系数
            c (`float`): z系数
            d (`float`): 常数项
        """
        self.a = a
        self.b = b
        self.c = c
        self.d = d

    def approx(self, other: 'Plane3') -> bool:
        """
        判断两个平面是否近似相等。
        Args:
            other ([`Plane3`](./plane#class-plane3)): 另一个平面
        Returns:
            [`bool`](https://docs.python.org/3/library/functions.html#bool): 是否近似相等
        """
        if self.a != 0:
            k = other.a / self.a
            return approx(other.b, self.b * k) and approx(other.c, self.c * k) and approx(other.d, self.d * k)
        elif self.b != 0:
            k = other.b / self.b
            return approx(other.a, self.a * k) and approx(other.c, self.c * k) and approx(other.d, self.d * k)
        elif self.c != 0:
            k = other.c / self.c
            return approx(other.a, self.a * k) and approx(other.b, self.b * k) and approx(other.d, self.d * k)
        else:
            return False

    def cal_angle(self, other: 'Line3 | Plane3') -> 'AnyAngle':
        r"""
        计算平面与平面之间的夹角。
        :::tip
        平面间夹角计算公式:
        $$\theta = \arccos(\frac{n1 \cdot n2}{|n1| \cdot |n2|})$$
        其中 $n1$ 和 $n2$ 分别为两个平面的法向量
        :::
        :::tip
        平面与直线夹角计算公式:
        $$\theta = \arccos(\frac{n \cdot d}{|n| \cdot |d|})$$
        其中 $n$ 为平面的法向量，$d$ 为直线的方向向量
        :::
        Args:
            other ([`Line3`](./line#class-line3) | [`Plane3`](./plane#class-plane3)): 另一个平面或直线
        Returns:
            [`AnyAngle`](./angle#class-anyangle): 夹角
        Raises:
            [`TypeError`](https%3A//docs.python.org/3/library/exceptions.html#TypeError): 不支持的类型
        """
        if isinstance(other, Line3):
            return self.normal.cal_angle(other.direction).complementary
        elif isinstance(other, Plane3):
            return AnyAngle(math.acos(self.normal @ other.normal / (self.normal.length * other.normal.length)), is_radian=True)
        else:
            raise TypeError(f"Unsupported type: {type(other)}")

    def cal_distance(self, other: 'Plane3 | Point3') -> float:
        r"""
        计算平面与平面或点之间的距离。
        :::tip
        平面和平面之间的距离计算公式:
        暂未实现
        - 平行 = 0
        - 相交 = 0
        - 不平行 = $\frac{|\vec{P_1P_2} \cdot \vec{n}|}{|\vec{n}|}$
        其中，$P_1$和$P_2$分别为两个平面上的点，$\vec{n}$为平面的法向量。
        :::
        :::tip
        平面和点之间的距离计算公式:
        $$\frac{|\vec{P_1P} \cdot \vec{n}|}{|\vec{n}|}$$
        其中，$P_1$为平面上的点，$P$为点，$\vec{n}$为平面的法向量。
        :::
        Args:
            other ([`Plane3`](./plane#class-plane3) | [`Point3`](./point#class-point3)): 另一个平面或点
        Returns:
            [`float`](https%3A//docs.python.org/3/library/functions.html#float): 距离
        Raises:
            [`TypeError`](https%3A//docs.python.org/3/library/exceptions.html#TypeError): 不支持的类型
        """
        if isinstance(other, Plane3):
            raise NotImplementedError("Not implemented yet.")
        elif isinstance(other, Point3):
            return abs(self.a * other.x + self.b * other.y + self.c * other.z + self.d) / (self.a ** 2 + self.b ** 2 + self.c ** 2) ** 0.5
        else:
            raise TypeError(f"Unsupported type: {type(other)}")

    def cal_intersection_line3(self, other: 'Plane3') -> 'Line3':
        r"""
        计算两平面的交线。
        :::tip
        计算两平面交线的一般步骤:
        1. 求两平面的法向量的叉乘得到方向向量
        $$ d = n1 \times n2 $$
        2. 寻找直线上的一点，依次假设$x=0$, $y=0$, $z=0$，并代入两平面方程求出合适的点
        直线最终可用参数方程或点向式表示
        $$ \begin{cases} x = x_0 + dt \\ y = y_0 + dt \\ z = z_0 + dt \end{cases} $$
        或
        $$ \frac{x - x_0}{m} = \frac{y - y_0}{n} = \frac{z - z_0}{p} $$
        :::

        Args:
            other ([`Plane3`](./plane#class-plane3)): 另一个平面
        Returns:
            [`Line3`](./line#class-line3): 交线
        Raises:
            [`ValueError`](https%3A//docs.python.org/3/library/exceptions.html#ValueError): 平面平行且无交线
        """
        if self.normal.is_parallel(other.normal):
            raise ValueError("Planes are parallel and have no intersection.")
        direction = self.normal.cross(other.normal)  # 法向量叉乘得到方向向量
        # 寻找直线上的一点，依次假设x=0, y=0, z=0，找到合适的点
        x, y, z = 0, 0, 0
        # 依次判断条件假设x=0, y=0, z=0，找到合适的点
        # 先假设其中一个系数不为0，则令此坐标为0，构建增广矩阵，解出另外两个坐标

        if self.a != 0 and other.a != 0:
            A = np.array([[self.b, self.c], [other.b, other.c]])
            B = np.array([-self.d, -other.d])
            y, z = np.linalg.solve(A, B)
        elif self.b != 0 and other.b != 0:
            A = np.array([[self.a, self.c], [other.a, other.c]])
            B = np.array([-self.d, -other.d])
            x, z = np.linalg.solve(A, B)
        elif self.c != 0 and other.c != 0:
            A = np.array([[self.a, self.b], [other.a, other.b]])
            B = np.array([-self.d, -other.d])
            x, y = np.linalg.solve(A, B)

        return Line3(Point3(x, y, z), direction)

    def cal_intersection_point3(self, other: 'Line3') -> 'Point3':
        """
        计算平面与直线的交点。
        :::tip
        计算平面与直线交点的一般步骤:
        1. 求直线的参数方程
        2. 代入平面方程，解出t
        3. 代入直线参数方程，求出交点
        :::
        Args:
            other ([`Line3`](./line#class-line3)): 直线
        Returns:
            [`Point3`](./point#class-point3): 交点
        Raises:
            [`ValueError`](https%3A//docs.python.org/3/library/exceptions.html#ValueError): 平面与直线平行或重合
        """
        # 若平面的法向量与直线方向向量垂直，则直线与平面平行或重合
        if self.normal @ other.direction == 0:
            raise ValueError("The plane and the line are parallel or coincident.")
        # 获取直线的参数方程
        # 代入平面方程，解出t
        x, y, z = other.get_parametric_equations()
        t = (-(self.a * other.point.x + self.b * other.point.y + self.c * other.point.z + self.d) /
             (self.a * other.direction.x + self.b * other.direction.y + self.c * other.direction.z))
        return Point3(x(t), y(t), z(t))

    def cal_parallel_plane3(self, point: 'Point3') -> 'Plane3':
        """
        计算平行于该平面且过指定点的平面。
        Args:
            point ([`Point3`](./point#class-point3)): 指定点
        Returns:
            [`Plane3`](./plane#class-plane3): 平面
        """
        return Plane3.from_point_and_normal(point, self.normal)

    def is_parallel(self, other: 'Plane3') -> bool:
        """
        判断两个平面是否平行。
        Args:
            other ([`Plane3`](./plane#class-plane3)): 另一个平面
        Returns:
            [`bool`](https%3A//docs.python.org/3/library/functions.html#bool): 是否平行
        """
        return self.normal.is_parallel(other.normal)

    @property
    def normal(self) -> 'Vector3':
        """
        平面的法向量。
        Returns:
            [`Vector3`](./vector#class-vector3): 法向量
        """
        return Vector3(self.a, self.b, self.c)

    @classmethod
    def from_point_and_normal(cls, point: 'Point3', normal: 'Vector3') -> 'Plane3':
        """
        工厂函数 由点和法向量构造平面(点法式构造)。
        Args:
            point ([`Point3`](./point#class-point3)): 平面上一点
            normal ([`Vector3`](./vector#class-vector3)): 法向量
        Returns:
            [`Plane3`](./plane#class-plane3): 平面
        """
        a, b, c = normal.x, normal.y, normal.z
        d = -a * point.x - b * point.y - c * point.z  # d = -ax - by - cz
        return cls(a, b, c, d)

    @classmethod
    def from_three_points(cls, p1: 'Point3', p2: 'Point3', p3: 'Point3') -> 'Plane3':
        """
        工厂函数 由三点构造平面。
        Args:
            p1 ([`Point3`](./point#class-point3)): 点1
            p2 (`Point3`): 点2
            p3 (`Point3`): 点3
        Returns:
            平面
        """
        # 两个向量
        v1 = p2 - p1
        v2 = p3 - p1
        # 法向量
        normal = v1.cross(v2)
        return cls.from_point_and_normal(p1, normal)

    @classmethod
    def from_two_lines(cls, l1: 'Line3', l2: 'Line3') -> 'Plane3':
        """
        工厂函数 由两直线构造平面。
        Args:
            l1 ([`Line3`](./line#class-line3)): 直线
            l2 (`Line3`): 直线
        Returns:
            平面
        """
        v1 = l1.direction
        v2 = l2.point - l1.point
        if v2 == zero_vector3:
            v2 = l2.get_point(1) - l1.point
        return cls.from_point_and_normal(l1.point, v1.cross(v2))

    @classmethod
    def from_point_and_line(cls, point: 'Point3', line: 'Line3') -> 'Plane3':
        """
        工厂函数 由点和直线构造平面。
        Args:
            point ([`Point3`](./point#class-point3)): 平面上一点
            line ([`Line3`](./line#class-line3)): 直线
        Returns:
            平面
        """
        return cls.from_point_and_normal(point, line.direction)

    def __repr__(self):
        """
        返回平面的字符串表示。
        Returns:
            [`str`](https%3A//docs.python.org/3/library/functions.html#str): 字符串表示
        """
        return f"Plane3({self.a}, {self.b}, {self.c}, {self.d})"

    def __str__(self):
        """
        返回平面的字符串表示。
        Returns:
            [`str`](https%3A//docs.python.org/3/library/functions.html#str): 字符串表示
        """
        s = "Plane3: "
        if self.a != 0:
            s += f"{sign(self.a, only_neg=True)}{abs(self.a)}x"
        if self.b != 0:
            s += f" {sign(self.b)} {abs(self.b)}y"
        if self.c != 0:
            s += f" {sign(self.c)} {abs(self.c)}z"
        if self.d != 0:
            s += f" {sign(self.d)} {abs(self.d)}"
        return s + " = 0"

    @overload
    def __and__(self, other: 'Line3') -> 'Point3 | None':
        ...

    @overload
    def __and__(self, other: 'Plane3') -> 'Line3 | None':
        ...

    def __and__(self, other):
        """
        取两平面的交集（人话：交线）
        Args:
            other ([`Line3`](./line#class-line3) | [`Plane3`](./plane#class-plane3)): 另一个平面或直线
        Returns:
            [`Line3`](./line#class-line3) | [`Point3`](./point#class-point3) | [`None`](https%3A//docs.python.org/3/library/constants.html#None): 交集
        Raises:
            [`TypeError`](https%3A//docs.python.org/3/library/exceptions.html#TypeError): 不支持的类型
        """
        if isinstance(other, Plane3):
            if self.normal.is_parallel(other.normal):
                return None
            return self.cal_intersection_line3(other)
        elif isinstance(other, Line3):
            if self.normal @ other.direction == 0:
                return None
            return self.cal_intersection_point3(other)
        else:
            raise TypeError(f"unsupported operand type(s) for &: 'Plane3' and '{type(other)}'")

    def __eq__(self, other) -> bool:
        """
        判断两个平面是否等价。
        Args:
            other ([`Plane3`](./plane#class-plane3)): 另一个平面
        Returns:
            [`bool`](https%3A//docs.python.org/3/library/functions.html#bool): 是否等价
        """
        return self.approx(other)

    def __rand__(self, other: 'Line3') -> 'Point3':
        return self.cal_intersection_point3(other)


