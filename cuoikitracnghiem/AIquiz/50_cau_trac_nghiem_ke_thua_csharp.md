# 50 câu trắc nghiệm C# - Chủ đề Kế thừa

## Câu hỏi

### Câu 1
Trong C#, kế thừa được hiểu đúng nhất là gì?

A. Class con sao chép toàn bộ mã nguồn của class cha vào file của nó  
B. Class con có thể dùng lại đặc điểm và hành vi của class cha  
C. Class con tự động biến mọi field của class cha thành `public`  
D. Class con luôn tạo ra object của class cha trước khi tạo object của nó  

### Câu 2
Cú pháp nào biểu diễn class `Dog` kế thừa class `Animal`?

A. `class Dog inherit Animal`  
B. `class Dog : Animal`  
C. `class Dog extends Animal`  
D. `class Dog -> Animal`  

### Câu 3
Trong đoạn sau, `Animal` được gọi là gì?

```csharp
class Animal
{
}

class Dog : Animal
{
}
```

A. Class con  
B. Base class / class cha  
C. Interface  
D. Struct  

### Câu 4
Trong đoạn sau, `Dog` được gọi là gì?

```csharp
class Animal
{
}

class Dog : Animal
{
}
```

A. Derived class / class con  
B. Constructor  
C. Namespace  
D. Static class  

### Câu 5
Class con thường dùng lại được thành phần nào của class cha?

A. Chỉ constructor của class cha  
B. Các member `public` và `protected` phù hợp  
C. Mọi member `private` như thể chúng là `public`  
D. Chỉ field, không dùng được method  

### Câu 6
`private` member của class cha có thể được class con truy cập trực tiếp không?

A. Có, vì đã kế thừa thì truy cập được hết  
B. Có, nếu class con nằm cùng namespace  
C. Không, chỉ chính class khai báo nó mới truy cập trực tiếp được  
D. Không, vì `private` chỉ dùng được cho biến cục bộ  

### Câu 7
`protected` member khác `private` ở điểm nào trong kế thừa?

A. `protected` truy cập được từ mọi nơi như `public`  
B. `protected` truy cập được trong class khai báo và class con  
C. `protected` chỉ dùng được cho static field  
D. `protected` làm class không thể kế thừa  

### Câu 8
Kết quả đúng của đoạn code sau là gì?

```csharp
class Car
{
    protected int speed;
}

class MiniVan : Car
{
    public void SetSpeed()
    {
        speed = 100;
    }
}
```

A. Lỗi vì `speed` là `protected`  
B. Hợp lệ, vì class con được truy cập `protected` member  
C. Lỗi vì class con không được có method mới  
D. Chỉ hợp lệ nếu `speed` là `static`  

### Câu 9
Constructor của class cha có được kế thừa như method bình thường không?

A. Có, class con tự có tất cả constructor của class cha  
B. Có, nhưng chỉ constructor không tham số  
C. Không, class con phải tự khai báo constructor của nó  
D. Không, vì class cha không được có constructor  

### Câu 10
`base(...)` trong constructor class con dùng để làm gì?

A. Gọi constructor của class cha  
B. Gọi constructor khác trong cùng class  
C. Tạo object mới của class con  
D. Ép kiểu class con về class cha  

### Câu 11
Đoạn code nào đúng khi `Employee` không có constructor rỗng?

```csharp
class Employee
{
    public Employee(string name, int id) { }
}
```

A. 
```csharp
class Manager : Employee
{
    public Manager() { }
}
```

B. 
```csharp
class Manager : Employee
{
    public Manager(string name, int id) : base(name, id) { }
}
```

C. 
```csharp
class Manager : Employee
{
    public Manager(string name, int id) : this(name, id) { }
}
```

D. 
```csharp
class Manager : Employee
{
    public Manager(string name, int id) : Employee(name, id) { }
}
```

### Câu 12
Nếu class con không viết `base(...)`, compiler thường ngầm hiểu gì?

A. Gọi `base()`  
B. Gọi `this()`  
C. Không gọi constructor nào của class cha  
D. Gọi mọi constructor của class cha  

### Câu 13
Khi tạo object class con, thứ tự constructor chạy thường là gì?

A. Constructor class con chạy trước, rồi class cha  
B. Constructor class cha chạy trước, rồi class con  
C. Hai constructor chạy song song  
D. Chỉ constructor class con chạy  

### Câu 14
C# cho một class kế thừa trực tiếp tối đa bao nhiêu class cha?

A. 0  
B. 1  
C. 2  
D. Không giới hạn  

### Câu 15
Câu nào đúng về đa kế thừa trong C#?

A. Một class có thể kế thừa nhiều class cha  
B. Một class không thể implement nhiều interface  
C. Một class chỉ kế thừa trực tiếp một class, nhưng có thể implement nhiều interface  
D. C# không có interface  

### Câu 16
Cú pháp nào đúng khi class `Triangle` vừa kế thừa `Shape`, vừa implement `IPointy`?

A. `class Triangle : Shape, IPointy`  
B. `class Triangle : IPointy, Shape`  
C. `class Triangle implements Shape : IPointy`  
D. `class Triangle extends Shape implements IPointy`  

### Câu 17
`sealed class` có ý nghĩa gì?

A. Class bắt buộc phải được kế thừa  
B. Class không cho class khác kế thừa nó  
C. Class chỉ chứa static method  
D. Class không được có constructor  

### Câu 18
Đoạn code sau sẽ như thế nào?

```csharp
sealed class Car
{
}

class MiniVan : Car
{
}
```

A. Hợp lệ  
B. Lỗi vì `Car` là `sealed`  
C. Chỉ lỗi nếu `Car` có constructor  
D. Chỉ lỗi nếu `MiniVan` có field riêng  

### Câu 19
Trong C#, nếu một class không ghi rõ kế thừa class nào, nó vẫn gián tiếp kế thừa từ đâu?

A. `System.Object` / `object`  
B. `System.String`  
C. `System.Console`  
D. Không kế thừa gì cả  

### Câu 20
`base.MethodName()` trong class con dùng để làm gì?

A. Gọi method cùng tên của class cha  
B. Gọi method bất kỳ trong class con  
C. Xóa method của class cha  
D. Biến method thành static  

### Câu 21
Muốn class con ghi đè method của class cha để tạo đa hình runtime, class cha thường phải khai báo method bằng từ khóa nào?

A. `new`  
B. `private`  
C. `virtual`  
D. `static`  

### Câu 22
Class con dùng từ khóa nào để ghi đè method `virtual` của class cha?

A. `override`  
B. `overload`  
C. `base`  
D. `sealed`  

### Câu 23
Đoạn code sau in ra gì?

```csharp
using System;

class Animal
{
    public virtual void Speak()
    {
        Console.WriteLine("Animal");
    }
}

class Dog : Animal
{
    public override void Speak()
    {
        Console.WriteLine("Dog");
    }
}

Animal a = new Dog();
a.Speak();
```

A. `Animal`  
B. `Dog`  
C. Lỗi vì không được gán `new Dog()` cho biến `Animal`  
D. Không in gì  

### Câu 24
Đoạn code sau in ra gì?

```csharp
using System;

class Animal
{
    public void Speak()
    {
        Console.WriteLine("Animal");
    }
}

class Dog : Animal
{
    public new void Speak()
    {
        Console.WriteLine("Dog");
    }
}

Animal a = new Dog();
a.Speak();
```

A. `Dog`  
B. `Animal`  
C. Lỗi vì `new` không dùng được với method  
D. Lỗi vì thiếu `override`  

### Câu 25
Sự khác nhau đúng giữa `new` và `override` là gì?

A. `new` che/hide member cha, `override` ghi đè đa hình thật  
B. `new` tạo constructor, `override` tạo field  
C. `new` chỉ dùng cho class, `override` chỉ dùng cho biến cục bộ  
D. Không có sự khác nhau  

### Câu 26
Đoạn code nào hợp lệ?

A. 
```csharp
class Animal
{
    public void Speak() { }
}
class Dog : Animal
{
    public override void Speak() { }
}
```

B. 
```csharp
class Animal
{
    public virtual void Speak() { }
}
class Dog : Animal
{
    public override void Speak() { }
}
```

C. 
```csharp
class Animal
{
    public private void Speak() { }
}
```

D. 
```csharp
class Animal
{
    public static override void Speak() { }
}
```

### Câu 27
`abstract class` có đặc điểm nào đúng?

A. Không thể được dùng làm class cha  
B. Không thể tạo object trực tiếp bằng `new`  
C. Chỉ được chứa field, không được chứa method  
D. Bắt buộc phải là `static`  

### Câu 28
`abstract method` có đặc điểm nào đúng?

A. Có thân hàm `{ }` mặc định  
B. Không có thân hàm và class con thường phải `override`  
C. Chỉ dùng được trong static class  
D. Không cần đặt trong abstract class  

### Câu 29
Đoạn nào khai báo abstract method đúng?

A. `public abstract void Speak();`  
B. `public abstract void Speak() { }`  
C. `public void abstract Speak();`  
D. `public static abstract void Speak() { }`  

### Câu 30
Nếu class con không override abstract method của class cha thì sao?

A. Luôn hợp lệ  
B. Class con phải được khai báo `abstract`, nếu không sẽ lỗi  
C. Method tự động biến thành `virtual`  
D. Compiler tự tạo thân hàm rỗng  

### Câu 31
Khác biệt đúng giữa `virtual` và `abstract` là gì?

A. `virtual` có thể có thân hàm mặc định, `abstract` không có thân hàm  
B. `virtual` bắt buộc override, `abstract` không bắt buộc override  
C. `virtual` chỉ dùng cho field, `abstract` chỉ dùng cho biến  
D. Hai từ khóa này giống hệt nhau  

### Câu 32
Abstract class có thể có constructor không?

A. Không bao giờ  
B. Có, để class con gọi thông qua `base(...)`  
C. Chỉ có static constructor  
D. Chỉ khi abstract class không có abstract method  

### Câu 33
Quan hệ nào phù hợp nhất để dùng kế thừa?

A. `Car` has-a `Engine`  
B. `Dog` is-a `Animal`  
C. `Student` has-a `Address`  
D. `Computer` has-a `CPU`  

### Câu 34
Quan hệ nào thường nên dùng composition thay vì inheritance?

A. `Manager` is-a `Employee`  
B. `Circle` is-a `Shape`  
C. `Car` has-a `Engine`  
D. `Cat` is-a `Animal`  

### Câu 35
Upcasting trong kế thừa là gì?

A. Ép class cha xuống class con  
B. Gán object class con vào biến kiểu class cha  
C. Chuyển object thành string  
D. Gọi constructor cha bằng `base(...)`  

### Câu 36
Đoạn nào là upcasting hợp lệ?

```csharp
class Animal { }
class Dog : Animal { }
```

A. `Dog d = new Animal();`  
B. `Animal a = new Dog();`  
C. `Dog d = Animal();`  
D. `Animal a = Dog;`  

### Câu 37
Downcasting có rủi ro gì?

A. Có thể lỗi nếu object thật không phải kiểu con cần ép  
B. Luôn tự động thành công  
C. Chỉ dùng được với static class  
D. Làm mất hết field của object  

### Câu 38
Toán tử `is` thường dùng để làm gì trong kế thừa?

A. Kiểm tra object có thuộc một kiểu nào đó hay không  
B. Tạo object mới  
C. Gọi constructor cha  
D. Ghi đè method cha  

### Câu 39
Toán tử `as` khi ép kiểu reference type thất bại sẽ trả về gì?

A. `0`  
B. `false`  
C. `null`  
D. Một object rỗng tự tạo  

### Câu 40
Đoạn code sau in ra gì?

```csharp
using System;

class Shape
{
    public virtual void Draw()
    {
        Console.WriteLine("Shape");
    }
}

class Circle : Shape
{
    public override void Draw()
    {
        Console.WriteLine("Circle");
    }
}

Shape s = new Circle();
s.Draw();
```

A. `Shape`  
B. `Circle`  
C. Lỗi vì `Circle` không thể gán cho `Shape`  
D. Không in gì  

### Câu 41
Property có thể tham gia `virtual/override` không?

A. Có, property có thể khai báo `virtual` và class con `override`  
B. Không, chỉ method mới override được  
C. Chỉ property `static` mới override được  
D. Chỉ field mới override được  

### Câu 42
`protected set` trong property thường có ý nghĩa gì?

```csharp
class Animal
{
    public string Name { get; protected set; }
}
```

A. Bên ngoài class có thể đọc `Name`, nhưng chỉ class đó hoặc class con được gán  
B. Không ai đọc được `Name`  
C. Ai cũng có thể gán `Name`  
D. `Name` tự động trở thành static  

### Câu 43
Static method có override được không?

A. Có, nếu thêm `virtual`  
B. Có, nếu class con cũng static  
C. Không, static không tham gia đa hình object kiểu `virtual/override`  
D. Chỉ override được trong abstract class  

### Câu 44
Static member trong quan hệ kế thừa nên được hiểu như thế nào?

A. Thuộc về object cụ thể nên có đa hình runtime  
B. Thuộc về class, không phải cơ chế đa hình object  
C. Luôn bị xóa khi class con được tạo  
D. Chỉ class con mới truy cập được  

### Câu 45
Struct trong C# có kế thừa class khác như class bình thường không?

A. Có, struct kế thừa được nhiều class  
B. Có, nhưng chỉ kế thừa được một class  
C. Không, struct không kế thừa class khác kiểu `struct Point : SomeClass`  
D. Không, vì struct không có method  

### Câu 46
Struct có thể implement interface không?

A. Có  
B. Không  
C. Chỉ khi interface không có method  
D. Chỉ khi struct là `static`  

### Câu 47
Vì sao interface thường đi cùng kế thừa/đa hình trong C#?

A. Vì interface cho phép class tránh constructor  
B. Vì class chỉ kế thừa trực tiếp một class, nhưng có thể implement nhiều interface  
C. Vì interface làm mọi member thành private  
D. Vì interface thay thế hoàn toàn class  

### Câu 48
Trong kế thừa, câu nào đúng về `private field` của class cha?

A. Class con có thể truy cập trực tiếp bằng tên field  
B. Class con không truy cập trực tiếp, nhưng có thể tương tác gián tiếp qua method/property public hoặc protected của class cha  
C. `private field` tự động bị xóa khi tạo class con  
D. `private field` tự động thành `protected`  

### Câu 49
Khi nào nên tránh dùng inheritance?

A. Khi class con thật sự là một loại class cha  
B. Khi chỉ muốn dùng lại code nhưng quan hệ không phải `is-a`  
C. Khi cần đa hình runtime  
D. Khi class cha có method `virtual`  

### Câu 50
Câu nào tóm tắt đúng nhất về kế thừa trong C#?

A. Kế thừa là công cụ để class con dùng lại và mở rộng class cha, nhưng vẫn bị giới hạn bởi access modifier, constructor và quy tắc `virtual/override`  
B. Kế thừa làm class con truy cập được mọi thứ trong class cha  
C. Kế thừa cho phép một class kế thừa vô hạn class cha  
D. Kế thừa chỉ dùng để thay thế constructor  

## Đáp án và giải thích ngắn

| Câu | Đáp án | Giải thích ngắn |
|---:|:---:|---|
| 1 | B | Kế thừa giúp class con dùng lại đặc điểm/hành vi của class cha. |
| 2 | B | C# dùng dấu `:` để biểu diễn kế thừa. |
| 3 | B | `Animal` là base class/class cha. |
| 4 | A | `Dog` là derived class/class con. |
| 5 | B | Class con thường dùng được member `public` và `protected`. |
| 6 | C | `private` chỉ truy cập trực tiếp trong class khai báo nó. |
| 7 | B | `protected` mở quyền truy cập cho class con. |
| 8 | B | Class con được truy cập `protected int speed`. |
| 9 | C | Constructor không được kế thừa như method bình thường. |
| 10 | A | `base(...)` gọi constructor class cha. |
| 11 | B | Vì `Employee` cần `name`, `id`, class con phải gọi `base(name, id)`. |
| 12 | A | Nếu không ghi, compiler cố gọi constructor rỗng `base()`. |
| 13 | B | Base constructor chạy trước derived constructor body. |
| 14 | B | C# chỉ cho kế thừa trực tiếp một class cha. |
| 15 | C | Một class chỉ có một base class trực tiếp nhưng có thể implement nhiều interface. |
| 16 | A | Nếu vừa có class cha vừa interface, class cha đứng trước. |
| 17 | B | `sealed` chặn kế thừa. |
| 18 | B | Không thể kế thừa từ `sealed class`. |
| 19 | A | Mọi class đều gián tiếp kế thừa từ `object`. |
| 20 | A | `base.MethodName()` gọi phiên bản method của class cha. |
| 21 | C | Method cha cần `virtual` để class con `override`. |
| 22 | A | Class con dùng `override`. |
| 23 | B | Do `virtual/override`, runtime gọi `Dog.Speak()`. |
| 24 | B | `new` chỉ hide; biến kiểu `Animal` gọi method của `Animal`. |
| 25 | A | `new` là hiding, `override` là ghi đè đa hình thật. |
| 26 | B | Method cha `virtual`, class con `override` là hợp lệ. |
| 27 | B | Không thể `new` trực tiếp abstract class. |
| 28 | B | Abstract method không có thân hàm và phải được override nếu class con không abstract. |
| 29 | A | Abstract method kết thúc bằng `;`, không có `{ }`. |
| 30 | B | Class con phải override hoặc chính nó cũng là abstract. |
| 31 | A | `virtual` có thân hàm mặc định; `abstract` không có thân hàm. |
| 32 | B | Abstract class có thể có constructor để class con gọi. |
| 33 | B | `Dog` là một loại `Animal`, phù hợp inheritance. |
| 34 | C | `Car` có `Engine`, đây là has-a, nên dùng composition. |
| 35 | B | Upcasting là nhìn object con qua biến kiểu cha. |
| 36 | B | `Dog` là `Animal`, nên gán lên kiểu cha hợp lệ. |
| 37 | A | Downcast sai kiểu có thể lỗi runtime. |
| 38 | A | `is` kiểm tra kiểu object. |
| 39 | C | `as` thất bại thì trả về `null`. |
| 40 | B | `Draw()` được override nên gọi theo object thật `Circle`. |
| 41 | A | Property cũng có thể `virtual/override`. |
| 42 | A | Bên ngoài đọc được, nhưng setter chỉ class đó/class con dùng được. |
| 43 | C | Static method không override theo đa hình object. |
| 44 | B | Static thuộc class, không thuộc từng object. |
| 45 | C | Struct không kế thừa class khác như class thường. |
| 46 | A | Struct có thể implement interface. |
| 47 | B | Interface giúp vượt giới hạn một base class trực tiếp. |
| 48 | B | Không truy cập trực tiếp private field, nhưng có thể đi qua public/protected API. |
| 49 | B | Không nên dùng inheritance chỉ để reuse code khi không có quan hệ is-a. |
| 50 | A | Đây là tổng kết đầy đủ nhất. |
