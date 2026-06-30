# 50 câu trắc nghiệm C# - Interface: Bản thiết kế hành vi

## Ghi chú nhanh

Chủ đề bao phủ:

- Interface là “hợp đồng” / “bản thiết kế hành vi”
- Interface chứa method, property, event, indexer
- Interface không chứa field dữ liệu trực tiếp
- Interface không có constructor
- Interface không tạo object trực tiếp bằng `new`
- Class/struct implement interface
- Class implement interface phải viết đủ member
- Member implement interface thường phải là `public`
- Interface reference và đa hình
- Một class có thể implement nhiều interface
- Khác nhau giữa interface và abstract class
- Interface giúp giảm phụ thuộc vào class cụ thể

---

## Câu hỏi

### Câu 1
Interface trong C# hiểu đơn giản là gì?

A. Một class có đầy đủ dữ liệu và xử lý  
B. Một bản thiết kế hành vi / hợp đồng mà class phải làm theo  
C. Một object được tạo trực tiếp bằng `new`  
D. Một biến lưu dữ liệu trên heap  

**Đáp án: B**

**Giải thích:** Interface mô tả “phải có hành vi gì”, còn class implement sẽ quyết định “làm như thế nào”.

---

### Câu 2
Tên interface trong C# thường được đặt theo quy ước nào?

A. Bắt đầu bằng chữ `I`, ví dụ `IDrawable`  
B. Bắt đầu bằng chữ `C`, ví dụ `CDrawable`  
C. Luôn viết thường toàn bộ  
D. Luôn trùng tên với class implement  

**Đáp án: A**

**Giải thích:** Quy ước phổ biến là đặt tên interface bắt đầu bằng `I`: `IAnimal`, `IPointy`, `ISavable`.

---

### Câu 3
Interface phù hợp để mô tả điều gì?

A. Dữ liệu riêng bên trong object  
B. Khả năng / hành vi chung của nhiều class  
C. Bộ nhớ stack của biến  
D. Constructor mặc định của class  

**Đáp án: B**

**Giải thích:** Ví dụ `IFlyable` mô tả khả năng bay, `IPrintable` mô tả khả năng in.

---

### Câu 4
Trong phạm vi C# cơ bản, interface có thể chứa thành phần nào?

A. Method  
B. Property  
C. Event  
D. Cả A, B, C  

**Đáp án: D**

**Giải thích:** Interface có thể khai báo method, property, event, indexer.

---

### Câu 5
Interface có nên chứa field dữ liệu trực tiếp không?

A. Có  
B. Không  
C. Chỉ được nếu field là `private`  
D. Chỉ được nếu field là `protected`  

**Đáp án: B**

**Giải thích:** Interface mô tả hành vi, không giữ dữ liệu cụ thể. Nên dùng property thay vì field.

---

### Câu 6
Đoạn nào đúng trong interface?

A.
```csharp
public interface IPointy
{
    int numberOfPoints;
}
```

B.
```csharp
public interface IPointy
{
    int Points { get; }
}
```

C.
```csharp
public interface IPointy
{
    public IPointy() { }
}
```

D.
```csharp
public interface IPointy
{
    private int x;
}
```

**Đáp án: B**

**Giải thích:** Interface không chứa field, nhưng có thể khai báo property.

---

### Câu 7
Interface có constructor không?

A. Có, luôn có constructor mặc định  
B. Có, nhưng bắt buộc là `public`  
C. Không, interface không dùng để tạo object trực tiếp  
D. Có, nếu interface có property  

**Đáp án: C**

**Giải thích:** Constructor dùng để tạo object, còn interface không phải object hoàn chỉnh.

---

### Câu 8
Đoạn code nào sai?

A.
```csharp
public interface IAnimal
{
    void Speak();
}
```

B.
```csharp
public class Dog : IAnimal
{
    public void Speak() { }
}
```

C.
```csharp
IAnimal a = new Dog();
```

D.
```csharp
IAnimal a = new IAnimal();
```

**Đáp án: D**

**Giải thích:** Không thể tạo object trực tiếp từ interface.

---

### Câu 9
Trong phạm vi C# cơ bản, method trong interface thường được viết như thế nào?

A. Có thân hàm đầy đủ  
B. Chỉ khai báo tên, kiểu trả về và tham số, không viết thân hàm  
C. Bắt buộc có `private`  
D. Bắt buộc có `static`  

**Đáp án: B**

**Giải thích:** Interface chỉ khai báo hợp đồng; class implement mới viết thân hàm.

---

### Câu 10
Đoạn interface nào đúng theo mức cơ bản?

A.
```csharp
public interface IAnimal
{
    void Speak();
}
```

B.
```csharp
public interface IAnimal
{
    void Speak()
    {
        Console.WriteLine("Hello");
    }
}
```

C.
```csharp
public interface IAnimal
{
    int age;
}
```

D.
```csharp
public interface IAnimal
{
    public IAnimal() { }
}
```

**Đáp án: A**

**Giải thích:** Interface khai báo method không có thân hàm.

---

### Câu 11
Class implement interface bằng ký hiệu nào?

A. Dấu `.`  
B. Dấu `:`  
C. Dấu `=>`  
D. Dấu `==`  

**Đáp án: B**

**Giải thích:** Cú pháp: `class Dog : IAnimal`.

---

### Câu 12
Đoạn code nào thể hiện class `Dog` implement interface `IAnimal`?

A.
```csharp
class Dog . IAnimal
{
}
```

B.
```csharp
class Dog : IAnimal
{
}
```

C.
```csharp
class Dog => IAnimal
{
}
```

D.
```csharp
class Dog == IAnimal
{
}
```

**Đáp án: B**

**Giải thích:** C# dùng dấu `:` cho kế thừa class và implement interface.

---

### Câu 13
Nếu class implement interface nhưng thiếu member bắt buộc thì sao?

A. Chạy bình thường  
B. Lỗi compile  
C. Chỉ cảnh báo, không lỗi  
D. Tự động sinh code rỗng  

**Đáp án: B**

**Giải thích:** Đã implement interface thì phải viết đủ các method/property/event/indexer mà interface yêu cầu.

---

### Câu 14
Cho interface:

```csharp
public interface IPointy
{
    byte Points { get; }
}
```

Class nào implement đúng?

A.
```csharp
public class Triangle : IPointy
{
}
```

B.
```csharp
public class Triangle : IPointy
{
    public byte Points
    {
        get { return 3; }
    }
}
```

C.
```csharp
public class Triangle : IPointy
{
    private byte Points { get { return 3; } }
}
```

D.
```csharp
public class Triangle : IPointy
{
    public int numberOfPoints;
}
```

**Đáp án: B**

**Giải thích:** Class phải có property `Points` đúng kiểu và thường phải `public`.

---

### Câu 15
Khi implement interface ngầm định, member implement thường phải là gì?

A. `private`  
B. `protected`  
C. `public`  
D. `internal`  

**Đáp án: C**

**Giải thích:** Interface là hợp đồng public; member implement ngầm định phải đủ mở để bên ngoài gọi qua interface.

---

### Câu 16
Đoạn code nào sai vì method implement interface không public?

A.
```csharp
public interface IAnimal
{
    void Speak();
}

public class Dog : IAnimal
{
    public void Speak() { }
}
```

B.
```csharp
public interface IAnimal
{
    void Speak();
}

public class Dog : IAnimal
{
    void Speak() { }
}
```

C.
```csharp
IAnimal a = new Dog();
```

D.
```csharp
public interface IAnimal
{
    string Name { get; set; }
}
```

**Đáp án: B**

**Giải thích:** `void Speak()` trong class mặc định là private, nên không thỏa hợp đồng public của interface.

---

### Câu 17
Một class có thể implement nhiều interface không?

A. Có  
B. Không  
C. Chỉ được implement đúng một interface  
D. Chỉ interface mới implement được interface  

**Đáp án: A**

**Giải thích:** C# không cho đa kế thừa class, nhưng cho một class implement nhiều interface.

---

### Câu 18
Đoạn nào đúng khi một class implement nhiều interface?

A.
```csharp
class Robot : IMovable, IRechargeable
{
}
```

B.
```csharp
class Robot : IMovable : IRechargeable
{
}
```

C.
```csharp
class Robot implements IMovable, IRechargeable
{
}
```

D.
```csharp
class Robot with IMovable, IRechargeable
{
}
```

**Đáp án: A**

**Giải thích:** Các interface được liệt kê sau dấu `:`, phân cách bằng dấu phẩy.

---

### Câu 19
Nếu một class vừa kế thừa class cha vừa implement interface, thứ tự đúng là gì?

A. Interface trước, class cha sau  
B. Class cha trước, interface sau  
C. Thứ tự nào cũng được  
D. Không thể vừa kế thừa class vừa implement interface  

**Đáp án: B**

**Giải thích:** Cú pháp đúng: `class Triangle : Shape, IPointy`.

---

### Câu 20
Đoạn nào đúng?

A.
```csharp
class Triangle : IPointy, Shape
{
}
```

B.
```csharp
class Triangle : Shape, IPointy
{
}
```

C.
```csharp
class Triangle : Shape : IPointy
{
}
```

D.
```csharp
class Triangle implements Shape, IPointy
{
}
```

**Đáp án: B**

**Giải thích:** Nếu có class cha, class cha phải đứng đầu danh sách sau dấu `:`.

---

### Câu 21
Interface reference là gì?

A. Biến kiểu interface trỏ tới object của class implement interface đó  
B. Biến kiểu int chứa địa chỉ object  
C. Constructor của interface  
D. Field private trong interface  

**Đáp án: A**

**Giải thích:** Ví dụ: `IAnimal a = new Dog();`.

---

### Câu 22
Đoạn nào đúng?

A.
```csharp
IAnimal a = new IAnimal();
```

B.
```csharp
IAnimal a = new Dog();
```

C.
```csharp
Dog d = new IAnimal();
```

D.
```csharp
interface IAnimal = new Dog();
```

**Đáp án: B**

**Giải thích:** Biến kiểu interface có thể giữ object của class implement interface.

---

### Câu 23
Khi gọi method qua biến kiểu interface, method nào chạy?

A. Method trong interface tự chạy  
B. Method của object thật đang được biến interface trỏ tới  
C. Method của class `object`  
D. Không method nào chạy được  

**Đáp án: B**

**Giải thích:** Đây là đa hình qua interface.

---

### Câu 24
Cho code:

```csharp
IAnimal a = new Dog();
a.Speak();
```

Điều kiện để code đúng là gì?

A. `Dog` phải implement `IAnimal` và có method `Speak()` phù hợp  
B. `IAnimal` phải có constructor  
C. `Dog` phải là interface  
D. `Speak()` phải là static  

**Đáp án: A**

**Giải thích:** Interface yêu cầu `Speak()`, class thật phải implement method đó.

---

### Câu 25
Interface giúp đa hình như thế nào?

A. Cho nhiều class khác nhau được xử lý qua cùng một kiểu interface  
B. Bắt mọi class phải có cùng field  
C. Bắt chương trình chạy nhanh hơn  
D. Cấm class override method  

**Đáp án: A**

**Giải thích:** Ví dụ `Dog`, `Cat`, `Bird` đều có thể dùng qua kiểu `IAnimal`.

---

### Câu 26
Cho interface:

```csharp
public interface IAnimal
{
    void Speak();
}
```

Cách dùng đa hình nào đúng?

A.
```csharp
IAnimal[] animals = { new Dog(), new Cat() };
foreach (IAnimal a in animals)
{
    a.Speak();
}
```

B.
```csharp
IAnimal[] animals = { new IAnimal(), new IAnimal() };
```

C.
```csharp
Dog[] animals = { new IAnimal() };
```

D.
```csharp
foreach (Dog a in IAnimal)
{
}
```

**Đáp án: A**

**Giải thích:** Mảng kiểu interface có thể chứa nhiều object từ các class implement interface đó.

---

### Câu 27
Sự khác nhau chính giữa interface và abstract class là gì?

A. Interface chủ yếu mô tả hợp đồng hành vi; abstract class có thể chứa field, constructor, method có thân hàm  
B. Interface luôn chứa field, abstract class không chứa field  
C. Interface tạo object trực tiếp được, abstract class thì được tạo bằng `new`  
D. Interface chỉ dùng cho biến local  

**Đáp án: A**

**Giải thích:** Interface nghiêng về “phải có gì”, abstract class có thể chia sẻ cả dữ liệu và code chung.

---

### Câu 28
Khi nào nên dùng interface?

A. Khi nhiều class không nhất thiết cùng họ hàng nhưng có chung một khả năng  
B. Khi chỉ muốn lưu một biến int  
C. Khi muốn viết constructor cho object  
D. Khi muốn ép class không được implement gì  

**Đáp án: A**

**Giải thích:** Ví dụ `Bird`, `Airplane`, `Drone` đều có thể implement `IFlyable`.

---

### Câu 29
Ví dụ nào là tên interface hợp lý nhất?

A. `Dog`  
B. `Cat`  
C. `IFlyable`  
D. `Program`  

**Đáp án: C**

**Giải thích:** Interface thường mô tả khả năng/hành vi và bắt đầu bằng chữ `I`.

---

### Câu 30
`IFlyable` nên chứa method nào hợp lý nhất?

A. `void Fly();`  
B. `int age;`  
C. `public IFlyable() { }`  
D. `private string name;`  

**Đáp án: A**

**Giải thích:** Interface hành vi nên khai báo hành vi, ví dụ `Fly()`.

---

### Câu 31
Một interface quá lớn ép class implement nhiều method không cần thiết sẽ gây vấn đề gì?

A. Class phải viết nhiều thứ không liên quan  
B. Code tự động nhanh hơn  
C. Interface tự biến thành class  
D. Không còn cần constructor  

**Đáp án: A**

**Giải thích:** Nên tách interface nhỏ, rõ nghĩa như `IFlyable`, `ISwimmable`, `IPrintable`.

---

### Câu 32
Thiết kế nào tốt hơn?

A.
```csharp
public interface IBigSystem
{
    void Eat();
    void Fly();
    void Swim();
    void Print();
    void Save();
}
```

B.
```csharp
public interface IFlyable
{
    void Fly();
}

public interface ISwimmable
{
    void Swim();
}
```

C.
```csharp
public interface IData
{
    int x;
}
```

D.
```csharp
public interface IObject
{
    public IObject() { }
}
```

**Đáp án: B**

**Giải thích:** Interface nhỏ giúp class chỉ implement đúng khả năng cần thiết.

---

### Câu 33
Vì sao interface giúp giảm phụ thuộc class cụ thể?

A. Vì method có thể nhận kiểu interface thay vì nhận một class cụ thể  
B. Vì interface luôn tạo được object  
C. Vì interface lưu toàn bộ dữ liệu  
D. Vì interface bắt buộc phải private  

**Đáp án: A**

**Giải thích:** Ví dụ `PrintPoints(IPointy p)` dùng được cho mọi class implement `IPointy`.

---

### Câu 34
Cách viết nào linh hoạt hơn?

A.
```csharp
static void PrintTriangle(Triangle t)
{
    Console.WriteLine(t.Points);
}
```

B.
```csharp
static void PrintPoints(IPointy p)
{
    Console.WriteLine(p.Points);
}
```

C.
```csharp
static void PrintPoints(int p)
{
}
```

D.
```csharp
static void PrintPoints()
{
    IPointy p = new IPointy();
}
```

**Đáp án: B**

**Giải thích:** Nhận interface giúp hàm dùng được với `Triangle`, `Rectangle`, `Star` nếu chúng implement `IPointy`.

---

### Câu 35
Struct có implement interface được không?

A. Có  
B. Không  
C. Chỉ class mới implement interface được  
D. Chỉ interface mới implement struct được  

**Đáp án: A**

**Giải thích:** Struct cũng có thể implement interface.

---

### Câu 36
Đoạn nào đúng?

A.
```csharp
interface IDisplay
{
    void Display();
}

struct Point : IDisplay
{
    public void Display()
    {
        Console.WriteLine("Point");
    }
}
```

B.
```csharp
struct Point : SomeClass
{
}
```

C.
```csharp
interface IDisplay
{
    int x;
}
```

D.
```csharp
interface IDisplay
{
    public IDisplay() { }
}
```

**Đáp án: A**

**Giải thích:** Struct không kế thừa class, nhưng có thể implement interface.

---

### Câu 37
Interface có thể kế thừa interface khác không?

A. Có  
B. Không bao giờ  
C. Chỉ được nếu có constructor  
D. Chỉ được nếu interface có field  

**Đáp án: A**

**Giải thích:** Interface có thể mở rộng hợp đồng từ interface khác.

---

### Câu 38
Đoạn nào đúng về interface kế thừa interface?

A.
```csharp
public interface IAdvancedAnimal : IAnimal
{
    void Run();
}
```

B.
```csharp
public interface IAdvancedAnimal : AnimalClass
{
}
```

C.
```csharp
public interface IAdvancedAnimal()
{
}
```

D.
```csharp
public interface IAdvancedAnimal : new IAnimal()
{
}
```

**Đáp án: A**

**Giải thích:** Interface có thể kế thừa một hoặc nhiều interface khác.

---

### Câu 39
Nếu class implement interface con, nó phải làm gì?

A. Chỉ implement member của interface con  
B. Implement cả member kế thừa từ interface cha và member của interface con  
C. Không cần implement gì  
D. Chỉ cần viết constructor  

**Đáp án: B**

**Giải thích:** Interface con bao gồm cả hợp đồng của interface cha.

---

### Câu 40
Interface property sau yêu cầu class implement gì?

```csharp
public interface IUser
{
    string Name { get; set; }
}
```

A. Property `Name` có cả get và set  
B. Field `name` private  
C. Method `GetName()` thôi  
D. Constructor nhận name  

**Đáp án: A**

**Giải thích:** `{ get; set; }` yêu cầu property đọc và ghi.

---

### Câu 41
Interface property sau yêu cầu gì?

```csharp
public interface IPointy
{
    byte Points { get; }
}
```

A. Property chỉ cần đọc được  
B. Property bắt buộc ghi được  
C. Field public `Points`  
D. Constructor `Points()`  

**Đáp án: A**

**Giải thích:** `{ get; }` yêu cầu getter.

---

### Câu 42
Đoạn class nào thỏa interface sau?

```csharp
public interface IUser
{
    string Name { get; set; }
}
```

A.
```csharp
public class User : IUser
{
    public string Name { get; set; }
}
```

B.
```csharp
public class User : IUser
{
    public string Name { get; }
}
```

C.
```csharp
public class User : IUser
{
    private string Name { get; set; }
}
```

D.
```csharp
public class User : IUser
{
    public string username;
}
```

**Đáp án: A**

**Giải thích:** Interface yêu cầu property `Name` public có cả getter và setter.

---

### Câu 43
Explicit interface implementation dùng để làm gì?

A. Implement member interface theo cách chỉ gọi được qua biến interface  
B. Tạo constructor cho interface  
C. Tạo field trong interface  
D. Biến interface thành abstract class  

**Đáp án: A**

**Giải thích:** Ví dụ `void IAnimal.Speak()` là implement tường minh, thường gọi qua biến kiểu `IAnimal`.

---

### Câu 44
Đoạn nào là explicit interface implementation?

A.
```csharp
public void Speak() { }
```

B.
```csharp
void IAnimal.Speak() { }
```

C.
```csharp
private void Speak() { }
```

D.
```csharp
static void Speak() { }
```

**Đáp án: B**

**Giải thích:** Cú pháp có dạng `void InterfaceName.MethodName()`.

---

### Câu 45
Khi một class implement hai interface có method trùng tên, explicit implementation giúp gì?

A. Cho phép tách cách xử lý của từng interface  
B. Bắt buộc xóa một interface  
C. Bắt buộc method thành static  
D. Không có tác dụng  

**Đáp án: A**

**Giải thích:** Có thể viết `void IA.Run()` và `void IB.Run()` khác nhau.

---

### Câu 46
Câu nào đúng về biến kiểu interface?

A. Nó chỉ gọi được các member được khai báo trong interface đó  
B. Nó gọi được mọi member riêng của class thật  
C. Nó luôn truy cập được private field của object  
D. Nó luôn tạo object mới  

**Đáp án: A**

**Giải thích:** Khi biến có kiểu interface, compiler chỉ cho gọi các member thuộc hợp đồng interface.

---

### Câu 47
Cho code:

```csharp
public interface IAnimal
{
    void Speak();
}

public class Dog : IAnimal
{
    public void Speak() { }
    public void Bite() { }
}

IAnimal a = new Dog();
```

Lệnh nào gọi trực tiếp được qua biến `a`?

A. `a.Speak();`  
B. `a.Bite();`  
C. `a.Name = "Milu";`  
D. `a.age = 3;`  

**Đáp án: A**

**Giải thích:** Biến `a` có kiểu `IAnimal`, nên chỉ thấy `Speak()`.

---

### Câu 48
Muốn gọi `Bite()` trong ví dụ trên, cách nào hợp lý?

A.
```csharp
((Dog)a).Bite();
```

B.
```csharp
a.Bite();
```

C.
```csharp
IAnimal.Bite();
```

D.
```csharp
new IAnimal().Bite();
```

**Đáp án: A**

**Giải thích:** Cần ép kiểu về `Dog` nếu chắc object thật là `Dog`.

---

### Câu 49
Toán tử `is` dùng với interface để làm gì?

A. Kiểm tra object có implement interface đó không  
B. Tạo object interface mới  
C. Xóa interface khỏi class  
D. Tạo constructor cho interface  

**Đáp án: A**

**Giải thích:** Ví dụ `if (obj is IPrintable)` kiểm tra object có khả năng in không.

---

### Câu 50
Chốt đúng nhất về interface là gì?

A. Interface là nơi lưu dữ liệu chính của object  
B. Interface là bản thiết kế hành vi: class/struct implement nó phải cung cấp hành vi đã hứa  
C. Interface luôn thay thế được constructor  
D. Interface chỉ dùng cho biến `int`  

**Đáp án: B**

**Giải thích:** Interface là hợp đồng hành vi, giúp code linh hoạt và hỗ trợ đa hình.

---

## Bảng đáp án nhanh

| Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án |
|---:|:---:|---:|:---:|---:|:---:|---:|:---:|---:|:---:|
| 1 | B | 2 | A | 3 | B | 4 | D | 5 | B |
| 6 | B | 7 | C | 8 | D | 9 | B | 10 | A |
| 11 | B | 12 | B | 13 | B | 14 | B | 15 | C |
| 16 | B | 17 | A | 18 | A | 19 | B | 20 | B |
| 21 | A | 22 | B | 23 | B | 24 | A | 25 | A |
| 26 | A | 27 | A | 28 | A | 29 | C | 30 | A |
| 31 | A | 32 | B | 33 | A | 34 | B | 35 | A |
| 36 | A | 37 | A | 38 | A | 39 | B | 40 | A |
| 41 | A | 42 | A | 43 | A | 44 | B | 45 | A |
| 46 | A | 47 | A | 48 | A | 49 | A | 50 | B |
