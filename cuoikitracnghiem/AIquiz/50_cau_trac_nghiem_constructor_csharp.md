# 50 câu trắc nghiệm C# — Constructor

> Chủ đề: constructor trong C#  
> Mỗi câu có 4 lựa chọn A/B/C/D. Đáp án nằm cuối file.

---

## Phần 1 — Khái niệm và cú pháp cơ bản

### Câu 1
Constructor trong C# dùng để làm gì?

A. Hủy object khỏi bộ nhớ  
B. Khởi tạo object khi dùng `new`  
C. Chỉ để in dữ liệu ra màn hình  
D. Chỉ để khai báo biến static  

### Câu 2
Constructor có đặc điểm nào sau đây?

A. Tên constructor trùng với tên class  
B. Constructor bắt buộc có kiểu trả về `void`  
C. Constructor luôn là `static`  
D. Constructor không được có tham số  

### Câu 3
Đoạn nào là constructor hợp lệ?

```csharp
class Car
{
    public string name;
}
```

A. `public void Car() { }`  
B. `public int Car() { return 1; }`  
C. `public Car() { }`  
D. `public string Car() { return "Car"; }`  

### Câu 4
Vì sao đoạn sau không phải constructor?

```csharp
public void Student()
{
}
```

A. Vì có từ khóa `public`  
B. Vì có kiểu trả về `void`  
C. Vì tên bắt đầu bằng chữ hoa  
D. Vì thân hàm rỗng  

### Câu 5
Khi gọi:

```csharp
Car c = new Car();
```

Điều gì xảy ra?

A. Class `Car` bị xóa khỏi bộ nhớ  
B. Constructor `Car()` được gọi để khởi tạo object  
C. Method `void Car()` tự động được gọi  
D. Tất cả method trong class tự động chạy  

### Câu 6
Constructor có kiểu trả về nào?

A. `void`  
B. `int`  
C. `string`  
D. Không có kiểu trả về  

### Câu 7
Một constructor thường được đặt ở đâu?

A. Bên ngoài namespace  
B. Bên ngoài class  
C. Bên trong class cùng tên  
D. Trong file `.config`  

### Câu 8
Constructor chạy khi nào?

A. Khi class được khai báo  
B. Khi object được tạo bằng `new`  
C. Khi chương trình kết thúc  
D. Khi biến bị mất khỏi scope  

### Câu 9
Nếu constructor không gán giá trị cho field `int speed`, giá trị mặc định của field đó thường là gì?

A. `null`  
B. `false`  
C. `0`  
D. `""`  

### Câu 10
Nếu constructor không gán giá trị cho field `string name`, giá trị mặc định của field đó thường là gì?

A. `0`  
B. `false`  
C. `null`  
D. `"null"`  

---

## Phần 2 — Default constructor và custom constructor

### Câu 11
Nếu class không tự viết constructor nào, C# sẽ làm gì?

A. Báo lỗi ngay  
B. Tự tạo một default constructor không tham số  
C. Tự tạo constructor có tham số  
D. Không cho tạo object  

### Câu 12
Với class sau, dòng nào chạy được?

```csharp
class Car
{
    public string name;
}
```

A. `Car c = new Car();`  
B. `Car c = new Car("A");`  
C. `Car c = Car();`  
D. `Car c; c.name = "A";`  

### Câu 13
Nếu đã viết constructor có tham số, C# còn tự tạo constructor không tham số nữa không?

A. Có, luôn luôn tạo  
B. Không, phải tự viết nếu muốn dùng  
C. Có, nhưng chỉ khi class là `public`  
D. Có, nhưng chỉ khi field là `private`  

### Câu 14
Đoạn nào bị lỗi?

```csharp
class Car
{
    public string name;

    public Car(string n)
    {
        name = n;
    }
}
```

A. `Car a = new Car("BMW");`  
B. `Car b = new Car("Audi");`  
C. `Car c = new Car();`  
D. `string x = "Car";`  

### Câu 15
Muốn dùng được cả `new Car()` và `new Car("BMW")`, cần làm gì?

A. Chỉ viết `Car(string n)` là đủ  
B. Viết cả `Car()` và `Car(string n)`  
C. Viết `void Car()`  
D. Viết constructor trả về `string`  

### Câu 16
Default constructor thường có dạng nào?

A. `public void Car()`  
B. `public Car()`  
C. `static public Car()`  
D. `public int Car()`  

### Câu 17
Custom constructor là gì?

A. Constructor do lập trình viên tự viết  
B. Constructor do Garbage Collector tạo  
C. Constructor chỉ dùng cho `static class`  
D. Constructor chỉ dùng trong `interface`  

### Câu 18
Constructor không tham số còn được gọi là gì?

A. Copy constructor  
B. Default constructor  
C. Abstract constructor  
D. Virtual constructor  

### Câu 19
Câu nào đúng về constructor?

A. Constructor luôn phải có ít nhất một tham số  
B. Constructor có thể không có tham số  
C. Constructor không thể là `public`  
D. Constructor không thể gán field  

### Câu 20
Mục tiêu chính của constructor là gì?

A. Đưa object mới tạo vào trạng thái ban đầu hợp lệ  
B. Chỉ để ép kiểu dữ liệu  
C. Chỉ để overload toán tử  
D. Chỉ để xử lý exception  

---

## Phần 3 — Constructor overloading

### Câu 21
Constructor overloading nghĩa là gì?

A. Nhiều class cùng tên trong một project  
B. Nhiều constructor cùng tên class nhưng khác danh sách tham số  
C. Constructor trả về nhiều kiểu dữ liệu  
D. Constructor được gọi nhiều lần liên tục bởi một object  

### Câu 22
Bộ constructor nào hợp lệ?

```csharp
class Car
{
}
```

A.
```csharp
public Car() {}
public Car(string name) {}
```

B.
```csharp
public Car(string name) {}
public Car(string petName) {}
```

C.
```csharp
public int Car() { return 1; }
public string Car() { return ""; }
```

D.
```csharp
public void Car() {}
public Car() {}
```

### Câu 23
Hai constructor sau có tạo overload hợp lệ không?

```csharp
public Car(string name) {}
public Car(string petName) {}
```

A. Có, vì tên biến khác nhau  
B. Không, vì chữ ký đều là `Car(string)`  
C. Có, vì thân hàm khác nhau  
D. Không, vì constructor không được có tham số  

### Câu 24
Compiler chọn constructor dựa vào yếu tố nào?

A. Comment bên trong constructor  
B. Tên biến tham số  
C. Số lượng, kiểu dữ liệu và thứ tự tham số  
D. Số dòng code trong constructor  

### Câu 25
Gọi `new Car("Daisy", 75)` sẽ phù hợp với constructor nào?

A. `Car()`  
B. `Car(string name)`  
C. `Car(int speed, string name)`  
D. `Car(string name, int speed)`  

### Câu 26
Đoạn nào là overload hợp lệ?

A.
```csharp
public Car(int x) {}
public Car(int y) {}
```

B.
```csharp
public Car(string x, int y) {}
public Car(int x, string y) {}
```

C.
```csharp
public void Car() {}
public int Car() { return 0; }
```

D.
```csharp
public Car(string x) {}
public Car(string y) {}
```

### Câu 27
Khác kiểu trả về có tạo overload constructor được không?

A. Có, vì compiler dựa vào kiểu trả về  
B. Không, vì constructor không có kiểu trả về  
C. Có, nếu dùng `public`  
D. Có, nếu class có field  

### Câu 28
Vì sao constructor overload nên dùng?

A. Để object có nhiều cách khởi tạo khác nhau  
B. Để tránh dùng class  
C. Để thay thế toàn bộ method  
D. Để xóa field khỏi object  

### Câu 29
Đâu là ví dụ gọi constructor có tham số?

A. `Car c = new Car;`  
B. `Car c = Car("A");`  
C. `Car c = new Car("A");`  
D. `Car c = void Car("A");`  

### Câu 30
Nếu có hai constructor `Car(int, string)` và `Car(string, int)`, câu nào đúng?

A. Bị trùng vì cùng có 2 tham số  
B. Hợp lệ vì thứ tự kiểu dữ liệu khác nhau  
C. Chỉ hợp lệ nếu biến có tên khác nhau  
D. Không constructor nào được gọi được  

---

## Phần 4 — `this`, field initializer và constructor chaining

### Câu 31
Trong constructor, `this.name` thường dùng để chỉ gì?

A. Tham số `name`  
B. Field hoặc member của object hiện tại  
C. Class cha  
D. Namespace hiện tại  

### Câu 32
Đoạn sau bị lỗi logic ở đâu?

```csharp
class Car
{
    public string name;

    public Car(string name)
    {
        name = name;
    }
}
```

A. Constructor không được có tham số  
B. `name = name;` chỉ gán tham số cho chính nó, field không được gán  
C. Field không được là `public`  
D. Class không có method  

### Câu 33
Cách sửa đúng cho câu 32 là gì?

A. `this.name = name;`  
B. `name.this = name;`  
C. `Car.name = name;`  
D. `new name = this;`  

### Câu 34
Field initializer chạy lúc nào so với constructor?

```csharp
class Car
{
    public string name = "A";

    public Car()
    {
        name = "B";
    }
}
```

A. Sau constructor  
B. Trước thân constructor  
C. Không bao giờ chạy  
D. Chỉ chạy nếu constructor có tham số  

### Câu 35
Kết quả cuối cùng của `name` sau khi chạy `new Car()` trong câu 34 là gì?

A. `"A"`  
B. `"B"`  
C. `null`  
D. Lỗi compile  

### Câu 36
Constructor chaining dùng cú pháp nào?

A. `public Car() { this("A", 0); }`  
B. `public Car() : this("A", 0) { }`  
C. `public Car() -> this("A", 0) { }`  
D. `public Car() = this("A", 0) { }`  

### Câu 37
Mục tiêu chính của constructor chaining là gì?

A. Tránh lặp code khởi tạo ở nhiều constructor  
B. Làm constructor chạy sau method  
C. Cho phép constructor trả về giá trị  
D. Biến constructor thành field  

### Câu 38
`this(...)` trong constructor chaining phải đặt ở đâu?

A. Trong thân `{}` của constructor  
B. Sau dấu `:` ngay sau phần khai báo constructor  
C. Trong method `Main()`  
D. Trong phần khai báo field  

### Câu 39
Đoạn nào sai?

A.
```csharp
public Car() : this("No name", 0) {}
```

B.
```csharp
public Car(string name) : this(name, 0) {}
```

C.
```csharp
public Car()
{
    this("No name", 0);
}
```

D.
```csharp
public Car(string name, int speed)
{
    this.name = name;
    this.speed = speed;
}
```

### Câu 40
Một constructor có được gọi đồng thời hai constructor khác bằng `this(...)` không?

A. Có, nếu dùng dấu phẩy  
B. Có, nếu cả hai constructor không tham số  
C. Không, mỗi constructor chỉ chain tới một constructor khác  
D. Có, nếu class là `public`  

---

## Phần 5 — Access modifier, static constructor, kế thừa, struct và bẫy thường gặp

### Câu 41
Constructor có thể là `private` không?

A. Có  
B. Không  
C. Chỉ được trong `struct`  
D. Chỉ được trong `interface`  

### Câu 42
Private constructor thường dùng để làm gì?

A. Không cho bên ngoài tạo object trực tiếp  
B. Tự động overload mọi method  
C. Bắt buộc class phải kế thừa  
D. Tự động biến field thành static  

### Câu 43
Với class sau, dòng nào bị lỗi ở bên ngoài class?

```csharp
class MathHelper
{
    private MathHelper()
    {
    }

    public static int Add(int a, int b)
    {
        return a + b;
    }
}
```

A. `int x = MathHelper.Add(1, 2);`  
B. `MathHelper h = new MathHelper();`  
C. `Console.WriteLine(MathHelper.Add(1, 2));`  
D. `int y = 3;`  

### Câu 44
Static constructor có đặc điểm nào?

A. Có thể có tham số  
B. Có thể viết `public static ClassName()`  
C. Chạy một lần trước khi class được dùng lần đầu  
D. Phải được gọi bằng `new`  

### Câu 45
Static constructor hợp lệ có dạng nào?

A.
```csharp
public static Demo() {}
```

B.
```csharp
static Demo() {}
```

C.
```csharp
static Demo(int x) {}
```

D.
```csharp
private static Demo() {}
```

### Câu 46
Trong constructor thường, việc reset static field nhiều lần có thể gây vấn đề gì?

A. Mỗi lần tạo object mới, giá trị static có thể bị ghi đè lại  
B. Static field tự động thành local variable  
C. Constructor không chạy nữa  
D. Field thường bị xóa khỏi class  

### Câu 47
Trong kế thừa, constructor của class con có thể gọi constructor class cha bằng gì?

A. `this(...)`  
B. `base(...)`  
C. `super(...)`  
D. `parent(...)`  

### Câu 48
Nếu class con không ghi `base(...)`, C# thường cố gọi constructor nào của class cha?

A. Constructor không tham số của class cha  
B. Constructor cuối cùng của class cha  
C. Static constructor của class cha  
D. Destructor của class cha  

### Câu 49
Với `struct`, constructor có tham số cần chú ý điều gì?

A. Không được gán field  
B. Phải gán đủ các field trước khi constructor kết thúc  
C. Luôn phải là `private`  
D. Luôn phải gọi `base()`  

### Câu 50
Trong constructor, việc làm nào thường không nên?

A. Gán giá trị ban đầu cho field  
B. Kiểm tra dữ liệu đầu vào đơn giản  
C. Đưa object về trạng thái hợp lệ  
D. Nhét xử lý quá nặng như đọc file lớn, gọi database, vòng lặp dài  

---

# Đáp án nhanh

| Câu | Đáp án |
|---:|:---:|
| 1 | B |
| 2 | A |
| 3 | C |
| 4 | B |
| 5 | B |
| 6 | D |
| 7 | C |
| 8 | B |
| 9 | C |
| 10 | C |
| 11 | B |
| 12 | A |
| 13 | B |
| 14 | C |
| 15 | B |
| 16 | B |
| 17 | A |
| 18 | B |
| 19 | B |
| 20 | A |
| 21 | B |
| 22 | A |
| 23 | B |
| 24 | C |
| 25 | D |
| 26 | B |
| 27 | B |
| 28 | A |
| 29 | C |
| 30 | B |
| 31 | B |
| 32 | B |
| 33 | A |
| 34 | B |
| 35 | B |
| 36 | B |
| 37 | A |
| 38 | B |
| 39 | C |
| 40 | C |
| 41 | A |
| 42 | A |
| 43 | B |
| 44 | C |
| 45 | B |
| 46 | A |
| 47 | B |
| 48 | A |
| 49 | B |
| 50 | D |

---

# Ghi nhớ nhanh

```csharp
class Car
{
    public string Name;
    public int Speed;

    // Default constructor
    public Car() : this("No name", 0)
    {
    }

    // Constructor có 1 tham số
    public Car(string name) : this(name, 0)
    {
    }

    // Constructor chính
    public Car(string name, int speed)
    {
        this.Name = name;
        this.Speed = speed;
    }
}
```

Các luật trọng tâm:

- Constructor cùng tên với class.
- Constructor không có kiểu trả về, kể cả `void`.
- `new ClassName(...)` gọi constructor tương ứng.
- Không viết constructor nào thì C# ngầm tạo constructor không tham số.
- Đã viết constructor bất kỳ thì C# không tự tạo constructor không tham số nữa.
- Constructor overload phải khác số lượng, kiểu hoặc thứ tự tham số.
- Tên biến tham số khác nhau không tạo overload mới.
- `this.field` trỏ tới field của object hiện tại.
- `this(...)` dùng để gọi constructor khác trong cùng class.
- `base(...)` dùng để gọi constructor của class cha.
- Field initializer chạy trước thân constructor.
- Constructor nên khởi tạo object về trạng thái hợp lệ, không nên chứa xử lý quá nặng.
