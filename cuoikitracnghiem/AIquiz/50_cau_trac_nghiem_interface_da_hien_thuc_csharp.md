# 50 câu trắc nghiệm C# - Interface: Đa hiện thực interface

## Ghi chú nhanh

Chủ đề bao phủ:

- Một class implement nhiều interface
- Cú pháp `class C : BaseClass, I1, I2`
- Class cha phải đứng trước interface
- Interface giúp thay thế đa kế thừa class
- Một implementation có thể thỏa nhiều interface nếu chữ ký giống nhau
- Explicit interface implementation
- Xung đột method/property trùng tên
- Gọi member qua biến class và biến interface
- Ép kiểu interface bằng `is`, `as`, cast trực tiếp
- Interface kế thừa interface
- Thiết kế interface nhỏ, rõ hành vi

---

## Câu hỏi

### Câu 1
Trong C#, một class có thể implement bao nhiêu interface?

A. Chỉ 1 interface  
B. Tối đa 2 interface  
C. Nhiều interface  
D. Không class nào implement được interface  

**Đáp án: C**

**Giải thích:** C# không cho đa kế thừa class, nhưng cho một class implement nhiều interface.

---

### Câu 2
Cú pháp nào đúng khi class `Bird` implement hai interface `IFlyable` và `IRunnable`?

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
class Bird with IFlyable, IRunnable
{
}
```

**Đáp án: A**

**Giải thích:** Các interface được đặt sau dấu `:`, phân cách bằng dấu phẩy.

---

### Câu 3
Nếu một class vừa kế thừa class cha vừa implement interface, thứ tự đúng là gì?

A. Interface trước, class cha sau  
B. Class cha trước, interface sau  
C. Thứ tự nào cũng được  
D. Không thể vừa kế thừa class vừa implement interface  

**Đáp án: B**

**Giải thích:** Cú pháp đúng là `class Child : Parent, I1, I2`.

---

### Câu 4
Cú pháp nào đúng?

A.
```csharp
class Duck : IFlyable, Animal
{
}
```

B.
```csharp
class Duck : Animal, IFlyable, ISwimmable
{
}
```

C.
```csharp
class Duck : Animal : IFlyable
{
}
```

D.
```csharp
class Duck implements Animal, IFlyable
{
}
```

**Đáp án: B**

**Giải thích:** Nếu có class cha, class cha phải đứng đầu danh sách sau dấu `:`.

---

### Câu 5
Vì sao C# cần cho phép một class implement nhiều interface?

A. Để thay thế việc kế thừa nhiều class  
B. Để mọi class đều thành static  
C. Để bỏ constructor  
D. Để interface lưu dữ liệu object  

**Đáp án: A**

**Giải thích:** C# chỉ cho kế thừa một class, nhưng một object có thể có nhiều khả năng thông qua nhiều interface.

---

### Câu 6
Cho code:

```csharp
interface IFlyable
{
    void Fly();
}

interface ISwimmable
{
    void Swim();
}

class Duck : IFlyable, ISwimmable
{
}
```

Class `Duck` bị lỗi vì sao?

A. Interface không được có method  
B. `Duck` chưa implement `Fly()` và `Swim()`  
C. Một class không thể implement hai interface  
D. Interface phải có constructor  

**Đáp án: B**

**Giải thích:** Đã hứa implement interface thì phải viết đủ member mà interface yêu cầu.

---

### Câu 7
Cách implement đúng cho `Duck` là gì?

A.
```csharp
class Duck : IFlyable, ISwimmable
{
    public void Fly() { }
    public void Swim() { }
}
```

B.
```csharp
class Duck : IFlyable, ISwimmable
{
    private void Fly() { }
    private void Swim() { }
}
```

C.
```csharp
class Duck : IFlyable, ISwimmable
{
}
```

D.
```csharp
interface Duck : IFlyable, ISwimmable
{
}
```

**Đáp án: A**

**Giải thích:** Implement ngầm định interface thường phải là `public`.

---

### Câu 8
Nếu hai interface có method giống hệt nhau:

```csharp
interface IA
{
    void Run();
}

interface IB
{
    void Run();
}
```

Class implement cả hai có cần viết hai method `Run()` không?

A. Bắt buộc viết hai method public giống nhau  
B. Không, một method public `Run()` có thể thỏa cả hai interface  
C. Không được implement cả hai interface  
D. Phải đổi tên method trong interface  

**Đáp án: B**

**Giải thích:** Nếu chữ ký giống nhau, một implementation có thể đáp ứng cả hai hợp đồng.

---

### Câu 9
Đoạn nào implement đúng hai interface có cùng method `Run()`?

A.
```csharp
class Robot : IA, IB
{
    public void Run() { }
}
```

B.
```csharp
class Robot : IA, IB
{
}
```

C.
```csharp
class Robot : IA, IB
{
    private void Run() { }
}
```

D.
```csharp
class Robot : IA, IB
{
    int Run() { return 1; }
}
```

**Đáp án: A**

**Giải thích:** `public void Run()` khớp với cả `IA.Run()` và `IB.Run()`.

---

### Câu 10
Explicit interface implementation là gì?

A. Implement member interface bằng tên đầy đủ `InterfaceName.MemberName`  
B. Tạo field trong interface  
C. Tạo constructor trong interface  
D. Gọi method static của class  

**Đáp án: A**

**Giải thích:** Ví dụ: `void IA.Run() { }`.

---

### Câu 11
Đoạn nào là explicit interface implementation?

A.
```csharp
public void Run() { }
```

B.
```csharp
void IA.Run() { }
```

C.
```csharp
private public void Run() { }
```

D.
```csharp
static void IA.Run() { }
```

**Đáp án: B**

**Giải thích:** Explicit implementation dùng dạng `InterfaceName.MemberName`.

---

### Câu 12
Với explicit interface implementation, có được ghi `public` trước method không?

A. Có, bắt buộc phải public  
B. Không, không ghi access modifier  
C. Có, nhưng chỉ khi interface public  
D. Có, nhưng chỉ khi class abstract  

**Đáp án: B**

**Giải thích:** Cú pháp đúng là `void IA.Run() { }`, không viết `public void IA.Run()`.

---

### Câu 13
Cho code:

```csharp
interface IA
{
    void Run();
}

class Robot : IA
{
    void IA.Run()
    {
        Console.WriteLine("Run");
    }
}
```

Gọi nào đúng?

A.
```csharp
Robot r = new Robot();
r.Run();
```

B.
```csharp
IA r = new Robot();
r.Run();
```

C.
```csharp
Robot.Run();
```

D.
```csharp
new IA().Run();
```

**Đáp án: B**

**Giải thích:** Member explicit chỉ gọi được qua biến kiểu interface hoặc ép kiểu sang interface.

---

### Câu 14
Vì sao đoạn sau lỗi?

```csharp
Robot r = new Robot();
r.Run();
```

Biết `Robot` implement `void IA.Run()` explicit.

A. Vì `Run()` là static  
B. Vì explicit member không hiện ra qua biến kiểu `Robot`  
C. Vì interface không có method  
D. Vì `Robot` không tạo object được  

**Đáp án: B**

**Giải thích:** Explicit implementation giấu member khỏi API trực tiếp của class.

---

### Câu 15
Cách gọi đúng method explicit qua object `Robot r` là gì?

A.
```csharp
((IA)r).Run();
```

B.
```csharp
r.IA.Run();
```

C.
```csharp
IA.Run(r);
```

D.
```csharp
new IA(r).Run();
```

**Đáp án: A**

**Giải thích:** Ép object sang interface rồi gọi method.

---

### Câu 16
Khi nào explicit interface implementation đặc biệt hữu ích?

A. Khi hai interface có member trùng tên nhưng cần xử lý khác nhau  
B. Khi muốn interface có constructor  
C. Khi muốn bỏ qua mọi method interface  
D. Khi muốn class không tạo object được  

**Đáp án: A**

**Giải thích:** Explicit implementation cho phép tách `IA.Run()` và `IB.Run()`.

---

### Câu 17
Cho code:

```csharp
interface IA
{
    void Print();
}

interface IB
{
    void Print();
}

class Demo : IA, IB
{
    void IA.Print()
    {
        Console.WriteLine("A");
    }

    void IB.Print()
    {
        Console.WriteLine("B");
    }
}
```

Kết quả của đoạn sau là gì?

```csharp
IA x = new Demo();
x.Print();
```

A. In `A`  
B. In `B`  
C. Lỗi compile  
D. Không in gì  

**Đáp án: A**

**Giải thích:** Biến kiểu `IA` gọi implementation của `IA.Print()`.

---

### Câu 18
Với class `Demo` ở câu trên, kết quả của đoạn sau là gì?

```csharp
IB x = new Demo();
x.Print();
```

A. In `A`  
B. In `B`  
C. Lỗi runtime  
D. Không compile vì object thật là `Demo`  

**Đáp án: B**

**Giải thích:** Biến kiểu `IB` gọi implementation của `IB.Print()`.

---

### Câu 19
Nếu class implement `IA` và `IB`, thì object của class đó có thể gán cho biến kiểu nào?

A. Chỉ kiểu class thật  
B. Chỉ kiểu `IA`  
C. Chỉ kiểu `IB`  
D. Kiểu class thật, `IA`, hoặc `IB`  

**Đáp án: D**

**Giải thích:** Object implement nhiều interface có thể được nhìn qua nhiều “vai trò” khác nhau.

---

### Câu 20
Cho code:

```csharp
Robot r = new Robot();
IA a = r;
IB b = r;
```

Điều kiện để code hợp lệ là gì?

A. `Robot` implement cả `IA` và `IB`  
B. `IA` và `IB` phải là class  
C. `Robot` phải là interface  
D. `Robot` phải static  

**Đáp án: A**

**Giải thích:** Một object có thể được gán cho nhiều biến interface nếu class của nó implement các interface đó.

---

### Câu 21
Biến kiểu interface chỉ gọi được gì?

A. Tất cả member public của class thật  
B. Chỉ member được khai báo trong interface đó  
C. Cả private field của class thật  
D. Constructor của class thật  

**Đáp án: B**

**Giải thích:** Compiler nhìn theo kiểu biến. Nếu biến là `IA`, nó chỉ thấy hợp đồng `IA`.

---

### Câu 22
Cho code:

```csharp
interface IA
{
    void A();
}

interface IB
{
    void B();
}

class Demo : IA, IB
{
    public void A() { }
    public void B() { }
}

IA x = new Demo();
```

Lệnh nào gọi trực tiếp được qua `x`?

A. `x.A();`  
B. `x.B();`  
C. `x.ToStringg();`  
D. `x.Demo();`  

**Đáp án: A**

**Giải thích:** `x` có kiểu `IA`, nên chỉ thấy method `A()` của `IA`.

---

### Câu 23
Muốn gọi `B()` từ biến `IA x = new Demo();`, cách nào đúng?

A.
```csharp
((IB)x).B();
```

B.
```csharp
x.B();
```

C.
```csharp
IA.B();
```

D.
```csharp
new IB().B();
```

**Đáp án: A**

**Giải thích:** Object thật là `Demo` và có implement `IB`, nên có thể cast sang `IB`.

---

### Câu 24
Toán tử `is` dùng với interface để làm gì?

A. Kiểm tra object có implement interface đó không  
B. Tạo object từ interface  
C. Xóa interface khỏi class  
D. Gọi constructor interface  

**Đáp án: A**

**Giải thích:** Ví dụ `if (obj is IFlyable)` kiểm tra object có khả năng bay không.

---

### Câu 25
Cách kiểm tra và ép kiểu interface an toàn nào đúng?

A.
```csharp
if (obj is IFlyable f)
{
    f.Fly();
}
```

B.
```csharp
if (obj = IFlyable)
{
}
```

C.
```csharp
new IFlyable().Fly();
```

D.
```csharp
IFlyable(obj).Fly();
```

**Đáp án: A**

**Giải thích:** Pattern matching với `is` vừa kiểm tra vừa tạo biến interface.

---

### Câu 26
Toán tử `as` với interface trả về gì nếu object không implement interface đó?

A. Ném lỗi compile  
B. Trả về `null`  
C. Tự tạo object mới  
D. Trả về `false`  

**Đáp án: B**

**Giải thích:** `as` ép kiểu thất bại thì trả về `null`.

---

### Câu 27
Đoạn nào dùng `as` đúng?

A.
```csharp
IFlyable f = obj as IFlyable;
if (f != null)
{
    f.Fly();
}
```

B.
```csharp
IFlyable f = new IFlyable();
```

C.
```csharp
if (obj as IFlyable)
{
}
```

D.
```csharp
obj as IFlyable.Fly();
```

**Đáp án: A**

**Giải thích:** Dùng `as`, sau đó kiểm tra `null` trước khi gọi method.

---

### Câu 28
Nếu ép kiểu trực tiếp sai:

```csharp
IFlyable f = (IFlyable)obj;
```

mà `obj` không implement `IFlyable`, chuyện gì xảy ra?

A. Trả về `null`  
B. Ném exception runtime  
C. Tự động implement interface  
D. Không có gì xảy ra  

**Đáp án: B**

**Giải thích:** Cast trực tiếp sai sẽ gây `InvalidCastException`.

---

### Câu 29
Một interface có thể kế thừa nhiều interface khác không?

A. Có  
B. Không  
C. Chỉ được kế thừa một interface  
D. Chỉ class mới kế thừa interface  

**Đáp án: A**

**Giải thích:** Interface có thể mở rộng hợp đồng từ nhiều interface.

---

### Câu 30
Cú pháp nào đúng khi interface kế thừa nhiều interface?

A.
```csharp
interface IAdvanced : IFlyable, ISwimmable
{
}
```

B.
```csharp
interface IAdvanced implements IFlyable, ISwimmable
{
}
```

C.
```csharp
interface IAdvanced : IFlyable : ISwimmable
{
}
```

D.
```csharp
interface IAdvanced with IFlyable, ISwimmable
{
}
```

**Đáp án: A**

**Giải thích:** Interface kế thừa interface cũng dùng dấu `:` và dấu phẩy.

---

### Câu 31
Nếu class implement interface con, nó phải implement những gì?

A. Chỉ member khai báo trực tiếp trong interface con  
B. Cả member của interface con và các interface cha  
C. Không cần implement gì  
D. Chỉ cần constructor  

**Đáp án: B**

**Giải thích:** Interface con gom toàn bộ hợp đồng của các interface cha.

---

### Câu 32
Cho code:

```csharp
interface IFlyable
{
    void Fly();
}

interface ISwimmable
{
    void Swim();
}

interface IDuckSkill : IFlyable, ISwimmable
{
    void Quack();
}
```

Class implement `IDuckSkill` phải viết gì?

A. Chỉ `Quack()`  
B. `Fly()`, `Swim()`, và `Quack()`  
C. Chỉ `Fly()`  
D. Không cần viết gì  

**Đáp án: B**

**Giải thích:** `IDuckSkill` bao gồm cả hợp đồng từ `IFlyable` và `ISwimmable`.

---

### Câu 33
Nếu hai interface có property cùng tên, cùng kiểu, cùng accessor:

```csharp
interface IA
{
    int Value { get; }
}

interface IB
{
    int Value { get; }
}
```

Class implement cả hai có thể viết gì?

A.
```csharp
public int Value { get { return 1; } }
```

B.
```csharp
private int Value { get { return 1; } }
```

C.
```csharp
public string Value { get { return "1"; } }
```

D.
```csharp
public int value;
```

**Đáp án: A**

**Giải thích:** Một public property đúng chữ ký có thể thỏa cả hai interface.

---

### Câu 34
Nếu `IA` yêu cầu `int Value { get; }`, còn `IB` yêu cầu `string Value { get; }`, cách nào xử lý được?

A. Dùng explicit interface implementation cho từng interface  
B. Một public property `Value` có thể vừa trả `int` vừa trả `string`  
C. Không thể implement interface nữa  
D. Bắt buộc đổi interface thành class  

**Đáp án: A**

**Giải thích:** Hai property trùng tên nhưng khác kiểu trả về cần tách bằng `int IA.Value` và `string IB.Value`.

---

### Câu 35
Đoạn nào đúng để xử lý property trùng tên khác kiểu?

A.
```csharp
class Demo : IA, IB
{
    int IA.Value { get { return 1; } }
    string IB.Value { get { return "one"; } }
}
```

B.
```csharp
class Demo : IA, IB
{
    public int Value { get { return 1; } }
    public string Value { get { return "one"; } }
}
```

C.
```csharp
class Demo : IA, IB
{
    public int string Value { get; }
}
```

D.
```csharp
class Demo : IA, IB
{
    private int Value;
}
```

**Đáp án: A**

**Giải thích:** Explicit interface implementation phân biệt property theo interface.

---

### Câu 36
Nếu `IA` có `void Save()` và `IB` có `void Save()`, muốn cả hai gọi chung một logic thì nên làm gì?

A. Viết một method public `Save()`  
B. Viết field `Save`  
C. Viết constructor `Save()`  
D. Không thể làm được  

**Đáp án: A**

**Giải thích:** Chữ ký giống nhau thì một method public có thể thỏa cả hai.

---

### Câu 37
Nếu `IA.Save()` và `IB.Save()` cần hành vi khác nhau, nên làm gì?

A. Dùng explicit interface implementation  
B. Bỏ một interface  
C. Đổi class thành enum  
D. Dùng local variable  

**Đáp án: A**

**Giải thích:** Explicit implementation cho phép `IA.Save()` và `IB.Save()` khác nhau.

---

### Câu 38
Đoạn code nào cho phép `IA.Save()` và `IB.Save()` khác nhau?

A.
```csharp
class FileData : IA, IB
{
    void IA.Save() { Console.WriteLine("Save A"); }
    void IB.Save() { Console.WriteLine("Save B"); }
}
```

B.
```csharp
class FileData : IA, IB
{
    public void Save() { Console.WriteLine("Only one"); }
}
```

C.
```csharp
class FileData : IA, IB
{
    public IA.Save() { }
}
```

D.
```csharp
class FileData : IA, IB
{
    static void Save() { }
}
```

**Đáp án: A**

**Giải thích:** Tên interface giúp tách hai implementation.

---

### Câu 39
Một class implement nhiều interface nên được hiểu như thế nào?

A. Class đó có nhiều vai trò / nhiều khả năng  
B. Class đó có nhiều constructor mặc định  
C. Class đó kế thừa nhiều class cha  
D. Class đó không thể tạo object  

**Đáp án: A**

**Giải thích:** Ví dụ `Duck` vừa `IFlyable`, vừa `ISwimmable`, vừa `IRunnable`.

---

### Câu 40
Thiết kế nào tốt hơn?

A.
```csharp
interface IAnimal
{
    void Fly();
    void Swim();
    void Run();
}
```

B.
```csharp
interface IFlyable
{
    void Fly();
}

interface ISwimmable
{
    void Swim();
}

interface IRunnable
{
    void Run();
}
```

C.
```csharp
interface IData
{
    int age;
}
```

D.
```csharp
interface IAnimal
{
    public IAnimal() { }
}
```

**Đáp án: B**

**Giải thích:** Tách interface nhỏ giúp class chỉ implement đúng khả năng nó có.

---

### Câu 41
Vì sao không nên gom quá nhiều hành vi không liên quan vào một interface lớn?

A. Vì class bị ép implement những method không cần thiết  
B. Vì interface lớn không compile được trong C#  
C. Vì interface không cho phép method  
D. Vì class không thể implement interface lớn  

**Đáp án: A**

**Giải thích:** Đây là lý do nên ưu tiên interface nhỏ, rõ nhiệm vụ.

---

### Câu 42
Trong đa hiện thực interface, nguyên tắc “interface nhỏ” giúp gì?

A. Giảm ép buộc không cần thiết cho class implement  
B. Làm mất tính đa hình  
C. Bắt mọi class phải kế thừa cùng một class cha  
D. Chặn ép kiểu interface  

**Đáp án: A**

**Giải thích:** Class chỉ chọn implement khả năng thật sự cần.

---

### Câu 43
Hàm nào linh hoạt hơn khi cần xử lý mọi object in được?

A.
```csharp
void Print(Document d)
{
    d.Print();
}
```

B.
```csharp
void Print(IPrintable p)
{
    p.Print();
}
```

C.
```csharp
void Print(int p)
{
}
```

D.
```csharp
void Print()
{
    IPrintable p = new IPrintable();
}
```

**Đáp án: B**

**Giải thích:** Nhận interface giúp hàm dùng được với mọi class implement `IPrintable`.

---

### Câu 44
Cho object implement cả `IPrintable` và `ISavable`. Khi truyền vào hàm nhận `IPrintable`, hàm đó thấy gì?

A. Chỉ thấy member của `IPrintable`  
B. Thấy cả member của `ISavable`  
C. Thấy toàn bộ private field  
D. Thấy constructor của object  

**Đáp án: A**

**Giải thích:** Kiểu tham số quyết định những member được gọi trực tiếp.

---

### Câu 45
Đoạn nào đúng về một object có nhiều vai trò interface?

A.
```csharp
Report r = new Report();
IPrintable p = r;
ISavable s = r;
```

B.
```csharp
IPrintable p = new IPrintable();
```

C.
```csharp
ISavable s = IPrintable;
```

D.
```csharp
Report : new IPrintable();
```

**Đáp án: A**

**Giải thích:** Nếu `Report` implement cả hai interface, cùng một object có thể nhìn qua hai kiểu interface.

---

### Câu 46
Trong trường hợp nào nên dùng explicit interface implementation để “giấu” member khỏi API public của class?

A. Khi member chỉ có ý nghĩa khi object được dùng qua interface đó  
B. Khi muốn tạo object interface trực tiếp  
C. Khi muốn biến method thành field  
D. Khi muốn class không implement đủ interface  

**Đáp án: A**

**Giải thích:** Explicit member không gọi được trực tiếp qua biến kiểu class, giúp API class gọn hơn.

---

### Câu 47
Nếu class implement interface ngầm định bằng `public void Run()`, method này gọi được qua biến nào?

A. Chỉ qua biến interface  
B. Chỉ qua biến class  
C. Qua cả biến class và biến interface  
D. Không gọi được  

**Đáp án: C**

**Giải thích:** Public implementation xuất hiện trong API class và cũng thỏa interface.

---

### Câu 48
Nếu class implement interface tường minh bằng `void IA.Run()`, method này gọi được qua biến nào?

A. Qua biến class trực tiếp  
B. Qua biến interface `IA` hoặc ép kiểu sang `IA`  
C. Qua tên class như static method  
D. Không gọi được  

**Đáp án: B**

**Giải thích:** Explicit implementation chỉ hiện qua interface tương ứng.

---

### Câu 49
Câu nào đúng về đa hiện thực interface?

A. Một class implement nhiều interface phải tạo nhiều object khác nhau  
B. Một object có thể được nhìn qua nhiều kiểu interface khác nhau  
C. Interface luôn chứa dữ liệu dùng chung  
D. Interface cấm đa hình  

**Đáp án: B**

**Giải thích:** Đây là điểm mạnh của nhiều interface: cùng object, nhiều vai trò.

---

### Câu 50
Chốt đúng nhất về “đa hiện thực interface” trong C# là gì?

A. Một class kế thừa nhiều class cha cùng lúc  
B. Một class hoặc struct thực hiện nhiều hợp đồng hành vi khác nhau  
C. Một interface tạo được nhiều object trực tiếp  
D. Một method có nhiều constructor  

**Đáp án: B**

**Giải thích:** Đa hiện thực interface nghĩa là một kiểu có thể cam kết nhiều khả năng/hành vi khác nhau.

---

## Bảng đáp án nhanh

| Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án |
|---:|:---:|---:|:---:|---:|:---:|---:|:---:|---:|:---:|
| 1 | C | 2 | A | 3 | B | 4 | B | 5 | A |
| 6 | B | 7 | A | 8 | B | 9 | A | 10 | A |
| 11 | B | 12 | B | 13 | B | 14 | B | 15 | A |
| 16 | A | 17 | A | 18 | B | 19 | D | 20 | A |
| 21 | B | 22 | A | 23 | A | 24 | A | 25 | A |
| 26 | B | 27 | A | 28 | B | 29 | A | 30 | A |
| 31 | B | 32 | B | 33 | A | 34 | A | 35 | A |
| 36 | A | 37 | A | 38 | A | 39 | A | 40 | B |
| 41 | A | 42 | A | 43 | B | 44 | A | 45 | A |
| 46 | A | 47 | C | 48 | B | 49 | B | 50 | B |
