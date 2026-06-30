# 50 câu trắc nghiệm C# - Chủ đề `Interface: đặc điểm không khởi tạo trực tiếp`

## Phạm vi bao phủ

Bộ câu hỏi này bao phủ các ý chính:

- Interface là gì
- Interface là “hợp đồng”, không phải object hoàn chỉnh
- Không thể `new` trực tiếp interface
- Biến kiểu interface có thể trỏ tới object của class implement interface
- Interface không có constructor trong phạm vi C# cơ bản
- Interface không chứa field dữ liệu trực tiếp
- Interface khai báo method/property/event/indexer
- Class implement interface phải viết đủ thành phần
- Interface và đa hình
- Một class có thể implement nhiều interface
- Thứ tự kế thừa class cha và implement interface
- Interface khác abstract class
- Interface naming convention: bắt đầu bằng `I`
- Explicit interface implementation
- Bẫy hay gặp khi thi và khi code

---

## Câu hỏi

### Câu 1
Interface trong C# được hiểu đúng nhất là gì?

A. Một object hoàn chỉnh có thể tạo trực tiếp bằng `new`  
B. Một hợp đồng quy định class implement phải có những thành phần nào  
C. Một biến toàn cục dùng chung cho toàn chương trình  
D. Một constructor đặc biệt của class  

### Câu 2
Vì sao interface không khởi tạo trực tiếp được?

A. Vì interface không có tên  
B. Vì interface chỉ là hợp đồng, không phải class/object hoàn chỉnh để tạo instance  
C. Vì interface luôn là `private`  
D. Vì interface chỉ dùng cho kiểu `int`  

### Câu 3
Dòng nào sai trong C# cơ bản?

A.
```csharp
IFlyable f = new Bird();
```

B.
```csharp
Bird b = new Bird();
```

C.
```csharp
IFlyable f = new IFlyable();
```

D.
```csharp
IFlyable f;
```

### Câu 4
Dòng nào đúng nếu `Bird : IFlyable`?

A.
```csharp
IFlyable f = new IFlyable();
```

B.
```csharp
IFlyable f = new Bird();
```

C.
```csharp
new IFlyable().Fly();
```

D.
```csharp
IFlyable.Fly();
```

### Câu 5
Biến kiểu interface có thể chứa gì?

A. Chỉ chứa số nguyên  
B. Object của class implement interface đó  
C. Chỉ chứa string  
D. Không thể khai báo biến kiểu interface  

### Câu 6
Cho code:

```csharp
interface IFlyable
{
    void Fly();
}

class Bird : IFlyable
{
    public void Fly()
    {
        Console.WriteLine("Bird flying");
    }
}
```

Dòng nào đúng?

A.
```csharp
IFlyable f = new Bird();
```

B.
```csharp
IFlyable f = new IFlyable();
```

C.
```csharp
IFlyable f = Bird;
```

D.
```csharp
Bird f = new IFlyable();
```

### Câu 7
Khi viết:

```csharp
IFlyable f = new Bird();
f.Fly();
```

Method nào được gọi?

A. Method `Fly()` do interface tự chạy  
B. Method `Fly()` của object thật là `Bird`  
C. Constructor của interface  
D. Không có method nào chạy  

### Câu 8
Interface có constructor không trong phạm vi C# cơ bản?

A. Có, luôn phải có constructor  
B. Không, vì interface không tạo object trực tiếp  
C. Có, nhưng constructor phải là `static`  
D. Có, nhưng chỉ nhận tham số `int`  

### Câu 9
Code nào sai?

A.
```csharp
interface IPointy
{
    byte Points { get; }
}
```

B.
```csharp
interface IFlyable
{
    void Fly();
}
```

C.
```csharp
interface ITest
{
    public ITest()
    {
    }
}
```

D.
```csharp
class Bird : IFlyable
{
    public void Fly() { }
}
```

### Câu 10
Lý do interface không có constructor là gì?

A. Vì interface không cần khởi tạo dữ liệu object riêng  
B. Vì interface không được đặt tên  
C. Vì interface chỉ được viết trong `Main`  
D. Vì interface luôn là static class  

### Câu 11
Interface thường chứa được gì trong phạm vi C# cơ bản?

A. Method, property, event, indexer  
B. Field dữ liệu trực tiếp  
C. Constructor instance  
D. Biến local ngoài method  

### Câu 12
Code nào là khai báo method đúng trong interface cơ bản?

A.
```csharp
interface IFlyable
{
    void Fly();
}
```

B.
```csharp
interface IFlyable
{
    void Fly()
    {
        Console.WriteLine("Fly");
    }
}
```

C.
```csharp
interface IFlyable
{
    public int speed;
}
```

D.
```csharp
interface IFlyable
{
    IFlyable()
    {
    }
}
```

### Câu 13
Trong phạm vi C# cơ bản, interface có viết thân hàm cho method không?

A. Có, bắt buộc viết thân hàm  
B. Không, chỉ khai báo chữ ký method  
C. Chỉ viết thân hàm nếu method là `private`  
D. Chỉ viết thân hàm nếu interface có constructor  

### Câu 14
Class implement interface phải làm gì?

A. Viết đủ các method/property mà interface yêu cầu  
B. Không cần viết gì  
C. Chỉ cần đặt tên giống interface  
D. Chỉ cần tạo constructor  

### Câu 15
Cho code:

```csharp
interface IPointy
{
    byte Points { get; }
}

class Triangle : IPointy
{
}
```

Code này lỗi vì sao?

A. `Triangle` chưa implement property `Points`  
B. Interface không được có property  
C. Class không được implement interface  
D. `byte` không dùng được trong interface  

### Câu 16
Sửa code câu 15 thế nào là đúng?

A.
```csharp
class Triangle : IPointy
{
    public byte Points
    {
        get { return 3; }
    }
}
```

B.
```csharp
class Triangle : IPointy
{
    private byte Points
    {
        get { return 3; }
    }
}
```

C.
```csharp
class Triangle : IPointy
{
    public int Points;
}
```

D.
```csharp
class Triangle : IPointy
{
    public void Points() { }
}
```

### Câu 17
Khi implement interface bằng cách thông thường, member triển khai thường phải có quyền truy cập nào?

A. `private`  
B. `public`  
C. `protected` bắt buộc  
D. Không được ghi access modifier  

### Câu 18
Vì sao method implement interface không được để `private` theo cách thông thường?

A. Vì interface yêu cầu member có thể được gọi qua biến kiểu interface  
B. Vì `private` làm method chạy nhanh hơn  
C. Vì `private` chỉ dùng cho constructor  
D. Vì interface không có method  

### Câu 19
Tên interface trong C# thường bắt đầu bằng chữ gì theo quy ước?

A. `C`  
B. `I`  
C. `M`  
D. `X`  

### Câu 20
Tên nào đúng quy ước đặt tên interface nhất?

A. `Flyable`  
B. `IFlyable`  
C. `flyable_class`  
D. `ClassFlyable`  

### Câu 21
Interface khác class ở điểm nào?

A. Interface là hợp đồng, class là kiểu có thể tạo object cụ thể  
B. Interface luôn có field instance  
C. Class không bao giờ có method  
D. Interface luôn tạo được object trực tiếp  

### Câu 22
Interface khác abstract class ở điểm cơ bản nào?

A. Interface dùng để mô tả khả năng/hợp đồng; abstract class thường là lớp cơ sở có quan hệ “là một”  
B. Interface luôn có constructor public  
C. Abstract class không thể có method  
D. Interface chỉ dùng cho biến số  

### Câu 23
C# cho phép một class kế thừa trực tiếp bao nhiêu class cha?

A. Nhiều class cha  
B. Một class cha  
C. Không class nào  
D. Chỉ hai class cha  

### Câu 24
Một class có thể implement bao nhiêu interface?

A. Chỉ một interface  
B. Nhiều interface  
C. Không interface nào  
D. Tối đa hai interface  

### Câu 25
Code nào đúng khi class vừa kế thừa class cha vừa implement interface?

A.
```csharp
class Triangle : Shape, IPointy
{
}
```

B.
```csharp
class Triangle : IPointy, Shape
{
}
```

C.
```csharp
class Triangle implements Shape, IPointy
{
}
```

D.
```csharp
class Triangle extends IPointy, Shape
{
}
```

### Câu 26
Trong C#, nếu vừa có class cha vừa có interface, thứ tự đúng sau dấu `:` là gì?

A. Interface trước, class cha sau  
B. Class cha trước, interface sau  
C. Thứ tự nào cũng được  
D. Không được viết chung  

### Câu 27
Một class implement nhiều interface đúng cú pháp là:

A.
```csharp
class Bird : IFlyable, IRunnable
{
}
```

B.
```csharp
class Bird implements IFlyable, IRunnable
{
}
```

C.
```csharp
class Bird : IFlyable : IRunnable
{
}
```

D.
```csharp
class Bird new IFlyable, IRunnable
{
}
```

### Câu 28
Interface giúp đa hình như thế nào?

A. Cho phép xử lý nhiều class khác nhau qua cùng một kiểu interface  
B. Bắt mọi class phải cùng kế thừa một class cha  
C. Cấm class có method riêng  
D. Biến mọi object thành string  

### Câu 29
Cho code:

```csharp
interface IDrawable
{
    void Draw();
}

class Circle : IDrawable
{
    public void Draw() { Console.WriteLine("Circle"); }
}

class Square : IDrawable
{
    public void Draw() { Console.WriteLine("Square"); }
}
```

Dòng nào thể hiện đa hình qua interface?

A.
```csharp
IDrawable d = new Circle();
d.Draw();
```

B.
```csharp
IDrawable d = new IDrawable();
```

C.
```csharp
Circle d = new IDrawable();
```

D.
```csharp
IDrawable.Draw();
```

### Câu 30
Mảng nào đúng nếu `Circle` và `Square` đều implement `IDrawable`?

A.
```csharp
IDrawable[] list = { new Circle(), new Square() };
```

B.
```csharp
IDrawable[] list = { new IDrawable(), new IDrawable() };
```

C.
```csharp
Circle[] list = { new IDrawable() };
```

D.
```csharp
IDrawable list = { new Circle(), new Square() };
```

### Câu 31
Khi gọi:

```csharp
foreach (IDrawable d in list)
{
    d.Draw();
}
```

Điều gì xảy ra?

A. Mỗi object chạy `Draw()` theo class thật của nó  
B. Interface tự vẽ thay cho class  
C. Chương trình luôn lỗi vì interface không dùng được trong foreach  
D. Chỉ phần tử đầu tiên chạy  

### Câu 32
Interface có chứa field dữ liệu trực tiếp không trong phạm vi C# cơ bản?

A. Có  
B. Không  
C. Chỉ field kiểu `int`  
D. Chỉ field `private`  

### Câu 33
Code nào sai vì interface chứa field?

A.
```csharp
interface IPointy
{
    int numberOfPoints;
}
```

B.
```csharp
interface IPointy
{
    int NumberOfPoints { get; }
}
```

C.
```csharp
interface IFlyable
{
    void Fly();
}
```

D.
```csharp
interface IRunnable
{
    void Run();
}
```

### Câu 34
Nếu cần yêu cầu class có dữ liệu dạng “số điểm”, interface nên khai báo gì?

A. Field trực tiếp  
B. Property  
C. Constructor  
D. Biến local  

### Câu 35
Interface property đúng là:

A.
```csharp
interface IPointy
{
    byte Points { get; }
}
```

B.
```csharp
interface IPointy
{
    byte Points;
}
```

C.
```csharp
interface IPointy
{
    public byte Points = 3;
}
```

D.
```csharp
interface IPointy
{
    byte Points()
    {
        return 3;
    }
}
```

### Câu 36
Nếu interface yêu cầu property `{ get; set; }`, class implement phải làm gì?

A. Cung cấp property có cả đọc và ghi phù hợp  
B. Chỉ cần field cùng tên  
C. Chỉ cần constructor  
D. Không cần làm gì  

### Câu 37
Cho interface:

```csharp
interface INamed
{
    string Name { get; set; }
}
```

Class nào implement đúng?

A.
```csharp
class Student : INamed
{
    public string Name { get; set; }
}
```

B.
```csharp
class Student : INamed
{
    private string Name { get; set; }
}
```

C.
```csharp
class Student : INamed
{
    public string name;
}
```

D.
```csharp
class Student : INamed
{
    public void Name() { }
}
```

### Câu 38
Interface có thể được dùng làm kiểu tham số method không?

A. Có  
B. Không  
C. Chỉ khi interface có constructor  
D. Chỉ khi interface có field  

### Câu 39
Code nào đúng về tham số kiểu interface?

A.
```csharp
void Print(IDrawable d)
{
    d.Draw();
}
```

B.
```csharp
void Print(new IDrawable d)
{
}
```

C.
```csharp
void Print(IDrawable())
{
}
```

D.
```csharp
void Print(interface d)
{
}
```

### Câu 40
Khi method nhận tham số `IDrawable d`, truyền object nào là hợp lệ?

A. Object của class implement `IDrawable`  
B. Bất kỳ số nguyên nào  
C. Bất kỳ string nào  
D. Chỉ object tạo từ `new IDrawable()`  

### Câu 41
Interface có thể được dùng làm kiểu trả về method không?

A. Có  
B. Không  
C. Chỉ trong static class  
D. Chỉ khi interface không có method  

### Câu 42
Code nào đúng về method trả về interface?

A.
```csharp
IDrawable Create()
{
    return new Circle();
}
```

B.
```csharp
IDrawable Create()
{
    return new IDrawable();
}
```

C.
```csharp
interface Create()
{
    return new Circle();
}
```

D.
```csharp
Circle Create()
{
    return new IDrawable();
}
```

### Câu 43
Explicit interface implementation là gì?

A. Cách implement member interface bằng dạng `InterfaceName.MemberName`  
B. Cách tạo object trực tiếp từ interface  
C. Cách viết constructor trong interface  
D. Cách biến interface thành class  

### Câu 44
Code nào là explicit interface implementation?

A.
```csharp
class Printer : IPrintable
{
    void IPrintable.Print()
    {
        Console.WriteLine("Print");
    }
}
```

B.
```csharp
class Printer : IPrintable
{
    public void IPrintable.Print()
    {
    }
}
```

C.
```csharp
class Printer : IPrintable
{
    private void Print()
    {
    }
}
```

D.
```csharp
interface IPrintable
{
    IPrintable()
    {
    }
}
```

### Câu 45
Với explicit interface implementation, thường gọi member đó bằng cách nào?

A. Ép hoặc gán object sang kiểu interface rồi gọi  
B. Gọi trực tiếp qua object class bằng mọi trường hợp  
C. Gọi qua tên namespace  
D. Gọi qua constructor interface  

### Câu 46
Cho code:

```csharp
interface IPrintable
{
    void Print();
}

class Printer : IPrintable
{
    void IPrintable.Print()
    {
        Console.WriteLine("Print");
    }
}
```

Cách gọi đúng là:

A.
```csharp
Printer p = new Printer();
p.Print();
```

B.
```csharp
IPrintable p = new Printer();
p.Print();
```

C.
```csharp
IPrintable p = new IPrintable();
p.Print();
```

D.
```csharp
Printer.Print();
```

### Câu 47
Interface có thể kế thừa interface khác không?

A. Có  
B. Không  
C. Chỉ khi có constructor  
D. Chỉ khi interface không có method  

### Câu 48
Code nào đúng về interface kế thừa interface?

A.
```csharp
interface IMovable
{
    void Move();
}

interface IFlyable : IMovable
{
    void Fly();
}
```

B.
```csharp
interface IFlyable implements IMovable
{
}
```

C.
```csharp
interface IFlyable new IMovable
{
}
```

D.
```csharp
interface IFlyable : class IMovable
{
}
```

### Câu 49
Nếu class implement `IFlyable : IMovable`, class đó phải làm gì?

A. Implement cả `Fly()` và `Move()`  
B. Chỉ implement `Fly()`  
C. Chỉ implement `Move()`  
D. Không cần implement gì  

### Câu 50
Chốt đúng nhất về đặc điểm “interface không khởi tạo trực tiếp” là gì?

A. Không tạo được biến kiểu interface  
B. Không thể `new InterfaceName()`, nhưng có thể dùng biến kiểu interface trỏ tới object của class implement interface  
C. Interface không thể có method  
D. Interface chỉ dùng để thay thế mọi class  

---

## Đáp án nhanh

| Câu | Đáp án |
|---:|:---:|
| 1 | B |
| 2 | B |
| 3 | C |
| 4 | B |
| 5 | B |
| 6 | A |
| 7 | B |
| 8 | B |
| 9 | C |
| 10 | A |
| 11 | A |
| 12 | A |
| 13 | B |
| 14 | A |
| 15 | A |
| 16 | A |
| 17 | B |
| 18 | A |
| 19 | B |
| 20 | B |
| 21 | A |
| 22 | A |
| 23 | B |
| 24 | B |
| 25 | A |
| 26 | B |
| 27 | A |
| 28 | A |
| 29 | A |
| 30 | A |
| 31 | A |
| 32 | B |
| 33 | A |
| 34 | B |
| 35 | A |
| 36 | A |
| 37 | A |
| 38 | A |
| 39 | A |
| 40 | A |
| 41 | A |
| 42 | A |
| 43 | A |
| 44 | A |
| 45 | A |
| 46 | B |
| 47 | A |
| 48 | A |
| 49 | A |
| 50 | B |

---

## Giải thích siêu ngắn

| Câu | Ý chính cần nhớ |
|---:|---|
| 1 | Interface là hợp đồng, không phải object hoàn chỉnh. |
| 2 | Interface không đủ phần thân/dữ liệu để tạo object trực tiếp. |
| 3 | `new IFlyable()` sai vì không thể khởi tạo interface. |
| 4 | Biến interface có thể trỏ tới object class implement. |
| 5 | Interface variable giữ object implement interface. |
| 6 | `Bird` implement `IFlyable` nên gán được cho biến `IFlyable`. |
| 7 | Method chạy là method của object thật. |
| 8 | Interface không có constructor instance trong phạm vi cơ bản. |
| 9 | Constructor trong interface là sai ở phạm vi cơ bản. |
| 10 | Interface không cần khởi tạo trạng thái object riêng. |
| 11 | Interface thường khai báo method/property/event/indexer. |
| 12 | Interface method cơ bản chỉ có chữ ký và dấu `;`. |
| 13 | Phần thân hàm để class implement tự viết. |
| 14 | Implement interface là phải làm đủ hợp đồng. |
| 15 | `Triangle` thiếu property `Points`. |
| 16 | Property implement phải public và đúng kiểu. |
| 17 | Implement thông thường phải public. |
| 18 | Biến interface cần gọi được member đó. |
| 19 | Interface thường bắt đầu bằng chữ `I`. |
| 20 | `IFlyable` đúng quy ước C#. |
| 21 | Class tạo object cụ thể, interface là hợp đồng. |
| 22 | Interface thiên về khả năng/hợp đồng, abstract class thiên về lớp cơ sở. |
| 23 | C# chỉ cho kế thừa trực tiếp một class cha. |
| 24 | Một class có thể implement nhiều interface. |
| 25 | Class cha viết trước, interface viết sau. |
| 26 | Thứ tự đúng là class cha trước interface. |
| 27 | Nhiều interface cách nhau bằng dấu phẩy. |
| 28 | Interface hỗ trợ đa hình qua kiểu chung. |
| 29 | `IDrawable d = new Circle();` là đa hình interface. |
| 30 | Mảng interface chứa được nhiều object implement interface. |
| 31 | Mỗi object chạy method của class thật. |
| 32 | Interface không giữ field dữ liệu trực tiếp trong phạm vi cơ bản. |
| 33 | `int numberOfPoints;` là field nên sai. |
| 34 | Muốn yêu cầu dữ liệu thì dùng property. |
| 35 | Interface property chỉ khai báo accessor. |
| 36 | `{ get; set; }` yêu cầu class có cả đọc và ghi. |
| 37 | Auto property public thỏa mãn interface. |
| 38 | Interface dùng được làm kiểu tham số. |
| 39 | Tham số interface giúp nhận mọi object implement interface. |
| 40 | Truyền object implement `IDrawable` là hợp lệ. |
| 41 | Interface dùng được làm kiểu trả về. |
| 42 | Trả `new Circle()` hợp lệ nếu `Circle : IDrawable`. |
| 43 | Explicit implementation dùng dạng `InterfaceName.MemberName`. |
| 44 | Explicit implementation không ghi `public`. |
| 45 | Cần gọi qua biến kiểu interface. |
| 46 | `IPrintable p = new Printer(); p.Print();` là đúng. |
| 47 | Interface có thể kế thừa interface khác. |
| 48 | Interface kế thừa interface dùng dấu `:`. |
| 49 | Implement interface con thì phải làm cả hợp đồng kế thừa. |
| 50 | Không `new Interface()`, nhưng dùng interface làm kiểu tham chiếu được. |

---

## Bảng chốt nhanh

| Cú pháp / ý tưởng | Ý nghĩa |
|---|---|
| `interface IFlyable` | Khai báo interface |
| `void Fly();` | Interface yêu cầu class có method `Fly` |
| `class Bird : IFlyable` | `Bird` implement interface |
| `IFlyable f = new Bird();` | Đúng: biến interface trỏ tới object implement |
| `IFlyable f = new IFlyable();` | Sai: không khởi tạo trực tiếp interface |
| Interface không constructor | Vì interface không tạo object trực tiếp |
| Interface không field | Vì interface không giữ dữ liệu cụ thể |
| Interface property | Dùng để yêu cầu class có property |
| Nhiều interface | `class A : IOne, ITwo` |
| Class cha + interface | `class A : BaseClass, IOne` |
| Interface kế thừa interface | `interface IChild : IParent` |
| Explicit implementation | `void IPrintable.Print() { }` |

## Mẹo nhớ

```csharp
interface = hợp đồng
class     = người thực hiện hợp đồng

Không được:
IFlyable f = new IFlyable();

Được:
IFlyable f = new Bird();
```

Ví dụ chuẩn:

```csharp
using System;

interface IFlyable
{
    void Fly();
}

class Bird : IFlyable
{
    public void Fly()
    {
        Console.WriteLine("Bird is flying");
    }
}

class Airplane : IFlyable
{
    public void Fly()
    {
        Console.WriteLine("Airplane is flying");
    }
}

class Program
{
    static void Main()
    {
        IFlyable[] flyers =
        {
            new Bird(),
            new Airplane()
        };

        foreach (IFlyable f in flyers)
        {
            f.Fly();
        }
    }
}
```

Kết quả:

```text
Bird is flying
Airplane is flying
```
