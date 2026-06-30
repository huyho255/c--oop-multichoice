# 50 câu trắc nghiệm C# - Access Modifier

## Ghi chú nhanh

Chủ đề bao phủ:

- `public`
- `private`
- `protected`
- `internal`
- `protected internal`
- `private protected`
- Access mặc định của class, field, method
- Access modifier với constructor, property, inheritance, assembly
- Các bẫy thường gặp khi đi thi

---

## Câu hỏi

### Câu 1
Trong C#, `public` có ý nghĩa gì?

A. Chỉ truy cập được trong cùng class  
B. Truy cập được từ bất kỳ nơi nào thấy được kiểu chứa nó  
C. Chỉ truy cập được trong class con  
D. Chỉ truy cập được trong cùng assembly  

**Đáp án: B**

**Giải thích:** `public` là mức truy cập rộng nhất.

---

### Câu 2
Trong C#, `private` có ý nghĩa gì?

A. Chỉ truy cập được trong cùng class hoặc struct  
B. Truy cập được từ class con  
C. Truy cập được từ mọi assembly  
D. Truy cập được từ cùng namespace  

**Đáp án: A**

**Giải thích:** `private` chỉ dùng nội bộ trong chính kiểu chứa nó.

---

### Câu 3
Modifier nào cho phép member được truy cập trong class hiện tại và class dẫn xuất?

A. `private`  
B. `protected`  
C. `internal`  
D. `public`  

**Đáp án: B**

**Giải thích:** `protected` dùng cho quan hệ kế thừa.

---

### Câu 4
Modifier nào giới hạn truy cập trong cùng assembly?

A. `public`  
B. `private`  
C. `internal`  
D. `protected`  

**Đáp án: C**

**Giải thích:** `internal` cho phép code trong cùng project/assembly truy cập.

---

### Câu 5
`protected internal` nghĩa là gì?

A. Chỉ truy cập được trong cùng class  
B. Truy cập được trong cùng assembly hoặc từ class dẫn xuất ở assembly khác  
C. Chỉ truy cập được từ class dẫn xuất trong cùng assembly  
D. Truy cập được ở mọi nơi  

**Đáp án: B**

**Giải thích:** `protected internal` là phép OR: cùng assembly hoặc class con.

---

### Câu 6
`private protected` nghĩa là gì?

A. Truy cập được trong cùng class hoặc bất kỳ class con nào  
B. Truy cập được trong cùng assembly và phải thông qua class dẫn xuất  
C. Truy cập được từ mọi class trong cùng namespace  
D. Truy cập được từ mọi nơi  

**Đáp án: B**

**Giải thích:** `private protected` hẹp hơn `protected internal`: phải cùng assembly và trong nhánh kế thừa.

---

### Câu 7
Nếu một field trong class không ghi access modifier, mặc định nó là gì?

```csharp
class Student
{
    int age;
}
```

A. `public`  
B. `private`  
C. `protected`  
D. `internal`  

**Đáp án: B**

**Giải thích:** Member trong class mặc định là `private`.

---

### Câu 8
Nếu một class cấp cao nhất không ghi `public`, mặc định nó là gì?

```csharp
class Student
{
}
```

A. `private`  
B. `protected`  
C. `internal`  
D. `public`  

**Đáp án: C**

**Giải thích:** Top-level class mặc định là `internal`.

---

### Câu 9
Đoạn code nào đúng về `private`?

A. Class khác cùng namespace luôn truy cập được private field  
B. Class con luôn truy cập được private field của class cha  
C. Chỉ chính class chứa member đó truy cập trực tiếp được  
D. Assembly khác truy cập được nếu có reference  

**Đáp án: C**

**Giải thích:** `private` không mở cho class con hay class cùng namespace.

---

### Câu 10
Cho đoạn code:

```csharp
class Car
{
    private int speed;
}

class Program
{
    static void Main()
    {
        Car c = new Car();
        c.speed = 10;
    }
}
```

Kết quả là gì?

A. Chạy bình thường  
B. Lỗi vì `speed` là `private`  
C. Lỗi vì `Car` không có constructor  
D. Lỗi vì `speed` phải là static  

**Đáp án: B**

**Giải thích:** `speed` chỉ truy cập được trong class `Car`.

---

### Câu 11
Muốn cho bên ngoài đọc `Name` nhưng không cho sửa trực tiếp, cách nào hợp lý?

A. `public string Name;`  
B. `public string Name { get; private set; }`  
C. `private string Name { get; set; }`  
D. `protected string Name;`  

**Đáp án: B**

**Giải thích:** Getter public, setter private giúp bên ngoài chỉ đọc.

---

### Câu 12
Cho property:

```csharp
public int Age { get; private set; }
```

Bên ngoài class có thể làm gì?

A. Đọc và ghi `Age`  
B. Chỉ ghi `Age`  
C. Chỉ đọc `Age`  
D. Không đọc cũng không ghi được  

**Đáp án: C**

**Giải thích:** `get` public, `set` private.

---

### Câu 13
`protected` khác `private` ở điểm nào?

A. `protected` cho phép class dẫn xuất truy cập  
B. `protected` cho phép mọi class truy cập  
C. `protected` chỉ dùng cho biến local  
D. `protected` chỉ dùng cho namespace  

**Đáp án: A**

**Giải thích:** `protected` sinh ra để hỗ trợ kế thừa.

---

### Câu 14
Cho đoạn code:

```csharp
class Animal
{
    protected int age;
}

class Dog : Animal
{
    void SetAge()
    {
        age = 5;
    }
}
```

Đoạn code trên thế nào?

A. Sai vì `age` là private  
B. Đúng vì `Dog` kế thừa `Animal`  
C. Sai vì `protected` không dùng cho field  
D. Sai vì thiếu `public`  

**Đáp án: B**

**Giải thích:** Class con truy cập được member `protected`.

---

### Câu 15
Cho đoạn code:

```csharp
class Animal
{
    protected int age;
}

class Program
{
    static void Main()
    {
        Animal a = new Animal();
        a.age = 5;
    }
}
```

Kết quả là gì?

A. Đúng vì `age` là protected  
B. Sai vì bên ngoài class không truy cập trực tiếp được `protected`  
C. Đúng vì cùng namespace  
D. Đúng nếu `Animal` có constructor  

**Đáp án: B**

**Giải thích:** `protected` không có nghĩa là public. Nó chỉ mở cho class hiện tại và class con.

---

### Câu 16
`internal` thường tương ứng với phạm vi nào?

A. Một method  
B. Một block `{}`  
C. Một assembly/project  
D. Một object  

**Đáp án: C**

**Giải thích:** `internal` giới hạn trong assembly.

---

### Câu 17
Hai class nằm cùng namespace nhưng khác assembly. Member `internal` có truy cập được không?

A. Có, vì cùng namespace  
B. Có, vì cùng tên class  
C. Không, vì khác assembly  
D. Luôn được nếu dùng `using`  

**Đáp án: C**

**Giải thích:** `internal` phụ thuộc assembly, không phụ thuộc namespace.

---

### Câu 18
`namespace` có phải là biên giới truy cập của `internal` không?

A. Có  
B. Không  
C. Chỉ đúng với class  
D. Chỉ đúng với struct  

**Đáp án: B**

**Giải thích:** `internal` xét assembly, không xét namespace.

---

### Câu 19
Modifier nào rộng hơn?

A. `private` rộng hơn `public`  
B. `public` rộng hơn `internal`  
C. `protected` rộng hơn `public`  
D. `private protected` rộng hơn `protected internal`  

**Đáp án: B**

**Giải thích:** `public` là rộng nhất.

---

### Câu 20
Modifier nào hẹp nhất trong các lựa chọn dưới đây?

A. `public`  
B. `internal`  
C. `private`  
D. `protected internal`  

**Đáp án: C**

**Giải thích:** `private` chỉ trong chính kiểu chứa nó.

---

### Câu 21
Một `private constructor` thường dùng để làm gì?

A. Cho phép tạo object tự do  
B. Chặn tạo object trực tiếp từ bên ngoài  
C. Bắt buộc class phải abstract  
D. Bắt buộc class phải kế thừa  

**Đáp án: B**

**Giải thích:** Constructor `private` kiểm soát việc tạo object.

---

### Câu 22
Đoạn code nào dùng `private constructor` đúng ý nghĩa?

A.
```csharp
class MathHelper
{
    private MathHelper() { }
    public static int Add(int a, int b) => a + b;
}
```

B.
```csharp
class MathHelper
{
    public MathHelper() { }
}
```

C.
```csharp
class MathHelper
{
    protected int x;
}
```

D.
```csharp
class MathHelper
{
    internal string name;
}
```

**Đáp án: A**

**Giải thích:** Class tiện ích static thường chặn tạo object bằng private constructor.

---

### Câu 23
Nếu constructor là `private`, bên ngoài class có gọi được `new ClassName()` không?

A. Có  
B. Không  
C. Chỉ được nếu cùng namespace  
D. Chỉ được nếu cùng file  

**Đáp án: B**

**Giải thích:** `private constructor` chỉ gọi được từ trong chính class.

---

### Câu 24
Access modifier có thể áp dụng cho thành phần nào?

A. Field  
B. Method  
C. Constructor  
D. Cả A, B, C  

**Đáp án: D**

**Giải thích:** Field, method, constructor, property, class đều có thể liên quan đến access modifier.

---

### Câu 25
Một local variable trong method có được ghi `public` không?

```csharp
void Test()
{
    public int x = 10;
}
```

A. Được  
B. Không được  
C. Chỉ được nếu method public  
D. Chỉ được nếu class public  

**Đáp án: B**

**Giải thích:** Biến cục bộ không dùng access modifier.

---

### Câu 26
Access modifier điều khiển điều gì?

A. Tốc độ chạy chương trình  
B. Phạm vi nhìn thấy và truy cập member/type  
C. Kiểu dữ liệu của biến  
D. Bộ nhớ stack hay heap  

**Đáp án: B**

**Giải thích:** Access modifier quyết định nơi nào được dùng member/type đó.

---

### Câu 27
Cho class:

```csharp
public class BankAccount
{
    private decimal balance;
}
```

Lý do nên để `balance` là `private` là gì?

A. Để bên ngoài tự ý sửa số dư  
B. Để che dữ liệu và bắt buộc đi qua method/property hợp lệ  
C. Để biến thành static  
D. Để class không kế thừa được  

**Đáp án: B**

**Giải thích:** Đây là encapsulation: giấu dữ liệu, mở hành vi cần thiết.

---

### Câu 28
Modifier nào thường đi với method phát event như `OnClick`, `OnExploded` để class con có thể tùy biến?

A. `private`  
B. `protected virtual`  
C. `internal const`  
D. `public readonly`  

**Đáp án: B**

**Giải thích:** `protected virtual` cho class con override logic phát event.

---

### Câu 29
Vì sao field thường không nên để `public` trực tiếp?

A. Vì public field luôn lỗi compile  
B. Vì dễ làm mất kiểm soát dữ liệu object  
C. Vì public field không lưu được dữ liệu  
D. Vì public chỉ dùng cho method  

**Đáp án: B**

**Giải thích:** Public field cho phép bên ngoài sửa thẳng, dễ phá trạng thái hợp lệ của object.

---

### Câu 30
Cách nào đúng hơn để bảo vệ dữ liệu `balance`?

A.
```csharp
public decimal balance;
```

B.
```csharp
private decimal balance;

public decimal Balance
{
    get { return balance; }
}
```

C.
```csharp
protected public decimal balance;
```

D.
```csharp
private public decimal balance;
```

**Đáp án: B**

**Giải thích:** Dữ liệu thật để private, mở getter khi cần.

---

### Câu 31
Trong một file khác nhưng cùng project, có thể truy cập class `internal` không?

A. Có, nếu cùng assembly/project  
B. Không bao giờ  
C. Chỉ được nếu cùng class  
D. Chỉ được nếu dùng kế thừa  

**Đáp án: A**

**Giải thích:** `internal` không giới hạn theo file, mà theo assembly.

---

### Câu 32
Một class `public` chứa method `private`. Method đó có public theo class không?

A. Có  
B. Không  
C. Chỉ public nếu method static  
D. Chỉ public nếu có constructor public  

**Đáp án: B**

**Giải thích:** Access của class và access của member là hai chuyện khác nhau.

---

### Câu 33
Cho đoạn code:

```csharp
public class A
{
    private void Run() { }
}

class B
{
    void Test()
    {
        A a = new A();
        a.Run();
    }
}
```

Kết quả là gì?

A. Chạy được vì class A public  
B. Lỗi vì `Run()` private  
C. Chạy được nếu B cùng namespace  
D. Chạy được nếu B cùng file  

**Đáp án: B**

**Giải thích:** Method `Run()` chỉ dùng trong class `A`.

---

### Câu 34
Khi nào nên dùng `protected` thay vì `private`?

A. Khi muốn class con dùng hoặc mở rộng member đó  
B. Khi muốn mọi object bên ngoài đều truy cập được  
C. Khi muốn member chỉ dùng trong một method  
D. Khi muốn biến thành hằng số  

**Đáp án: A**

**Giải thích:** `protected` dành cho thiết kế có kế thừa.

---

### Câu 35
Khi nào nên dùng `internal`?

A. Khi muốn API chỉ dùng nội bộ trong project/assembly  
B. Khi muốn mở API cho mọi assembly  
C. Khi muốn chỉ class con truy cập  
D. Khi muốn chỉ một object truy cập  

**Đáp án: A**

**Giải thích:** `internal` phù hợp cho code nội bộ project.

---

### Câu 36
`public` class nhưng `internal` method thì assembly khác có gọi method đó được không?

A. Có  
B. Không  
C. Chỉ được nếu method static  
D. Chỉ được nếu method virtual  

**Đáp án: B**

**Giải thích:** Assembly khác có thể thấy class public, nhưng không gọi được method internal.

---

### Câu 37
Modifier nào không phải access modifier theo nghĩa kiểm soát phạm vi truy cập?

A. `public`  
B. `private`  
C. `protected`  
D. `static`  

**Đáp án: D**

**Giải thích:** `static` nói member thuộc class, không phải object; nó không phải mức truy cập.

---

### Câu 38
Modifier nào không phải access modifier?

A. `internal`  
B. `protected`  
C. `readonly`  
D. `private`  

**Đáp án: C**

**Giải thích:** `readonly` điều khiển khả năng gán lại, không điều khiển phạm vi truy cập.

---

### Câu 39
`sealed` có phải access modifier không?

A. Có, vì nó cho phép truy cập public  
B. Không, nó liên quan đến việc chặn kế thừa  
C. Có, vì nó giống private  
D. Có, vì nó chỉ dùng trong assembly  

**Đáp án: B**

**Giải thích:** `sealed` không phải mức truy cập; nó chặn class bị kế thừa.

---

### Câu 40
`abstract` có phải access modifier không?

A. Không, nó nói class/member chưa hoàn chỉnh và cần class con triển khai  
B. Có, nó giống public  
C. Có, nó giống private  
D. Có, nó giới hạn trong assembly  

**Đáp án: A**

**Giải thích:** `abstract` không điều khiển phạm vi truy cập.

---

### Câu 41
Trong C#, member `public static` nghĩa là gì?

A. Truy cập được rộng rãi và thuộc về class  
B. Chỉ truy cập trong class và thuộc object  
C. Chỉ truy cập trong class con  
D. Chỉ truy cập trong assembly  

**Đáp án: A**

**Giải thích:** `public` là mức truy cập; `static` là thuộc về class.

---

### Câu 42
Trong C#, member `private static` nghĩa là gì?

A. Dùng chung cấp class nhưng chỉ dùng trong chính class đó  
B. Dùng được ở mọi nơi  
C. Dùng riêng cho từng object và public  
D. Dùng được từ mọi class con  

**Đáp án: A**

**Giải thích:** `private` giới hạn truy cập, `static` quyết định member thuộc class.

---

### Câu 43
Một class con có truy cập trực tiếp được `private` field của class cha không?

A. Có  
B. Không  
C. Có nếu cùng namespace  
D. Có nếu cùng file  

**Đáp án: B**

**Giải thích:** Class con không được truy cập trực tiếp `private` member của class cha.

---

### Câu 44
Một class con có truy cập trực tiếp được `protected` field của class cha không?

A. Có  
B. Không  
C. Chỉ được nếu field static  
D. Chỉ được nếu class cha sealed  

**Đáp án: A**

**Giải thích:** Đây là mục đích chính của `protected`.

---

### Câu 45
Access modifier nào thường dùng cho dữ liệu nội bộ của object?

A. `private`  
B. `public`  
C. `extern`  
D. `async`  

**Đáp án: A**

**Giải thích:** Field nội bộ thường để `private` để tránh bị sửa bừa từ bên ngoài.

---

### Câu 46
Access modifier nào nên dùng cho API mà người dùng class cần gọi?

A. `private`  
B. `public`  
C. `private protected`  
D. Không ghi gì luôn  

**Đáp án: B**

**Giải thích:** API dùng từ bên ngoài cần được mở bằng `public`.

---

### Câu 47
Nếu muốn class chỉ dùng trong project hiện tại, nên khai báo thế nào?

A. `public class Helper`  
B. `internal class Helper`  
C. `private class Helper` ở top-level  
D. `protected class Helper` ở top-level  

**Đáp án: B**

**Giải thích:** `internal class` chỉ thấy trong cùng assembly/project.

---

### Câu 48
Top-level class có thể khai báo `private` trực tiếp không?

A. Có  
B. Không  
C. Chỉ được nếu class static  
D. Chỉ được nếu class abstract  

**Đáp án: B**

**Giải thích:** Top-level class thường chỉ dùng được `public` hoặc `internal`. `private` dùng cho nested type/member.

---

### Câu 49
Nested class có thể là `private` không?

```csharp
class Outer
{
    private class Inner
    {
    }
}
```

A. Có  
B. Không  
C. Chỉ được nếu `Inner` là static  
D. Chỉ được nếu `Outer` là public  

**Đáp án: A**

**Giải thích:** Class lồng bên trong class khác có thể dùng access modifier như member.

---

### Câu 50
Mục tiêu lớn nhất của access modifier trong OOP là gì?

A. Làm code chạy nhanh hơn  
B. Tăng kích thước chương trình  
C. Che giấu chi tiết không cần thiết và bảo vệ trạng thái object  
D. Bắt buộc mọi class phải kế thừa  

**Đáp án: C**

**Giải thích:** Access modifier giúp đóng gói dữ liệu và kiểm soát cách bên ngoài dùng class.

---

## Bảng đáp án nhanh

| Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án |
|---:|:---:|---:|:---:|---:|:---:|---:|:---:|---:|:---:|
| 1 | B | 2 | A | 3 | B | 4 | C | 5 | B |
| 6 | B | 7 | B | 8 | C | 9 | C | 10 | B |
| 11 | B | 12 | C | 13 | A | 14 | B | 15 | B |
| 16 | C | 17 | C | 18 | B | 19 | B | 20 | C |
| 21 | B | 22 | A | 23 | B | 24 | D | 25 | B |
| 26 | B | 27 | B | 28 | B | 29 | B | 30 | B |
| 31 | A | 32 | B | 33 | B | 34 | A | 35 | A |
| 36 | B | 37 | D | 38 | C | 39 | B | 40 | A |
| 41 | A | 42 | A | 43 | B | 44 | A | 45 | A |
| 46 | B | 47 | B | 48 | B | 49 | A | 50 | C |
