# 50 câu trắc nghiệm C# - Chủ đề `Properties`

## Phạm vi bao phủ

Bộ câu hỏi này bao phủ các ý chính:

- Property là gì
- Field và property khác nhau ở đâu
- `get`, `set`, `value`
- Backing field
- Auto property `{ get; set; }`
- Read-only property `{ get; }`
- Write-only property `{ set; }`
- `private set`
- Validation trong property
- Static property
- Property và constructor
- Property và encapsulation
- Property trong inheritance, interface, abstract, virtual/override
- Bẫy hay gặp khi thi và khi code

---

## Câu hỏi

### Câu 1
Trong C#, property dùng để làm gì?

A. Thay thế hoàn toàn class  
B. Là cổng kiểm soát việc đọc/ghi dữ liệu của object  
C. Chỉ dùng để in dữ liệu ra màn hình  
D. Chỉ dùng trong vòng lặp  

### Câu 2
Phát biểu nào đúng nhất?

A. Field là nơi lưu dữ liệu thật, property là cửa đọc/ghi dữ liệu  
B. Property luôn lưu dữ liệu thật, field chỉ là tên gọi khác  
C. Field và property luôn giống nhau hoàn toàn  
D. Property chỉ dùng được với kiểu `string`  

### Câu 3
Trong property, `get` chạy khi nào?

A. Khi gán giá trị cho property  
B. Khi đọc giá trị từ property  
C. Khi tạo class  
D. Khi chương trình kết thúc  

### Câu 4
Trong property, `set` chạy khi nào?

A. Khi đọc property  
B. Khi gán giá trị cho property  
C. Khi gọi constructor không tham số  
D. Khi khai báo namespace  

### Câu 5
Trong `set`, từ khóa `value` là gì?

A. Tên của field trong class  
B. Giá trị đang được gán vào property  
C. Kiểu dữ liệu của property  
D. Tên object hiện tại  

### Câu 6
Cho code:

```csharp
private string name;

public string Name
{
    get { return name; }
    set { name = value; }
}
```

`name` là gì?

A. Property  
B. Backing field  
C. Constructor  
D. Namespace  

### Câu 7
Trong ví dụ ở câu 6, `Name` là gì?

A. Field  
B. Property  
C. Method  
D. Class  

### Câu 8
Vì sao thường để field là `private` và mở property là `public`?

A. Để không cần constructor  
B. Để kiểm soát dữ liệu vào/ra, tránh gán bậy trực tiếp vào field  
C. Để chương trình chạy nhanh hơn chắc chắn  
D. Để field tự động thành static  

### Câu 9
Cho code:

```csharp
public int Age
{
    get { return age; }
    set
    {
        if (value >= 0)
            age = value;
    }
}
```

Ý nghĩa chính của đoạn code là gì?

A. Không cho đọc tuổi  
B. Chỉ nhận tuổi không âm  
C. Tuổi luôn bằng 0  
D. Tuổi là static field  

### Câu 10
Nếu viết:

```csharp
emp.Name = "An";
```

Thành phần nào được gọi?

A. `get` của `Name`  
B. `set` của `Name`  
C. Constructor mặc định  
D. Destructor  

### Câu 11
Nếu viết:

```csharp
Console.WriteLine(emp.Name);
```

Thành phần nào được gọi?

A. `set` của `Name`  
B. `get` của `Name`  
C. `value`  
D. `Main`  

### Câu 12
Auto property là dạng nào?

A.
```csharp
public string Name { get; set; }
```

B.
```csharp
public string Name();
```

C.
```csharp
public void Name { get; set; }
```

D.
```csharp
public string Name = get; set;
```

### Câu 13
Auto property `{ get; set; }` có cần tự viết backing field không?

A. Có, luôn phải tự viết  
B. Không, compiler tự tạo backing field ngầm  
C. Chỉ cần với kiểu `int`  
D. Chỉ cần với kiểu `string`  

### Câu 14
Dạng nào là read-only property đơn giản?

A.
```csharp
public int Id { get; }
```

B.
```csharp
public int Id { set; }
```

C.
```csharp
public int Id();
```

D.
```csharp
public int Id { write; }
```

### Câu 15
Property `{ get; }` bên ngoài class có thể làm gì?

A. Đọc được, nhưng không gán trực tiếp được  
B. Gán được, nhưng không đọc được  
C. Vừa không đọc vừa không ghi  
D. Chỉ dùng được với static class  

### Câu 16
Dạng nào là write-only property?

A.
```csharp
public string Password { get; }
```

B.
```csharp
public string Password { set; }
```

C.
```csharp
public string Password { get; set; }
```

D.
```csharp
public string Password();
```

### Câu 17
Write-only property ít dùng vì sao?

A. Vì không thể gán dữ liệu  
B. Vì bên ngoài chỉ ghi được mà không đọc lại được, dễ gây khó hiểu  
C. Vì chỉ dùng được trong struct  
D. Vì luôn gây lỗi runtime  

### Câu 18
`private set` nghĩa là gì?

A. Bên ngoài đọc được, nhưng chỉ bên trong class mới gán được  
B. Bên ngoài gán được, nhưng không đọc được  
C. Không ai đọc được  
D. Property trở thành static  

### Câu 19
Dạng nào đúng về `private set`?

A.
```csharp
public int Id { get; private set; }
```

B.
```csharp
public int Id { private get; set; }
```

C.
```csharp
public int Id private { get; set; }
```

D.
```csharp
private public int Id { get; set; }
```

### Câu 20
Cho code:

```csharp
public int Id { get; private set; }
```

Dòng nào thường đúng ở bên ngoài class?

A. `obj.Id = 10;`  
B. `Console.WriteLine(obj.Id);`  
C. `obj.Id++;`  
D. `obj.Id.set(10);`  

### Câu 21
Property có bắt buộc phải có cả `get` và `set` không?

A. Có, luôn phải có cả hai  
B. Không, có thể chỉ có `get`, chỉ có `set`, hoặc có cả hai  
C. Chỉ được có `get`  
D. Chỉ được có `set`  

### Câu 22
Property có gọi bằng dấu ngoặc `()` như method không?

A. Có  
B. Không  
C. Chỉ khi property có `set`  
D. Chỉ khi property là static  

### Câu 23
Cách dùng property đúng là:

A. `emp.Name()`  
B. `emp.Name`  
C. `emp.get.Name()`  
D. `Name.emp()`  

### Câu 24
Tên property trong C# thường đặt theo kiểu nào?

A. camelCase, ví dụ `firstName`  
B. PascalCase, ví dụ `FirstName`  
C. Tất cả viết thường  
D. Có dấu tiếng Việt  

### Câu 25
Backing field private thường đặt theo kiểu nào?

A. PascalCase giống property  
B. camelCase hoặc `_camelCase`, ví dụ `name` hoặc `_name`  
C. Luôn viết hoa toàn bộ  
D. Bắt buộc trùng tên property  

### Câu 26
Cho code:

```csharp
private int empID;

public int EmpID
{
    get { return empID; }
    set
    {
        if (value >= 1000 && value <= 9999)
            empID = value;
    }
}
```

`EmpID` hợp lệ khi nào?

A. Khi có 1 chữ số  
B. Khi có 2 chữ số  
C. Khi nằm từ 1000 đến 9999  
D. Khi là số âm  

### Câu 27
Trong `set`, nếu giá trị không hợp lệ và không gán vào field thì điều gì xảy ra?

A. Field giữ giá trị cũ  
B. Field tự động thành `null`  
C. Object bị xóa  
D. Property tự động thành method  

### Câu 28
Property có thể chứa logic kiểm tra dữ liệu không?

A. Có  
B. Không  
C. Chỉ với kiểu `bool`  
D. Chỉ trong static class  

### Câu 29
Property có thể là `static` không?

A. Có  
B. Không  
C. Chỉ property kiểu `int`  
D. Chỉ property chỉ có `get`  

### Câu 30
Static property thuộc về gì?

A. Từng object riêng biệt  
B. Class/type  
C. Một method cụ thể  
D. Một biến cục bộ  

### Câu 31
Cách gọi static property đúng là:

A. `obj.ClassName.Property`  
B. `ClassName.Property`  
C. `this.Property` bên ngoài class  
D. `new Property()`  

### Câu 32
Cho code:

```csharp
class Config
{
    public static string AppName { get; set; }
}
```

Cách gán đúng là:

A. `Config.AppName = "Demo";`  
B. `AppName.Config = "Demo";`  
C. `new AppName("Demo");`  
D. `Config.AppName();`  

### Câu 33
Trong instance property, có thể dùng `this` không?

A. Có  
B. Không bao giờ  
C. Chỉ khi property static  
D. Chỉ trong interface  

### Câu 34
Trong static property, có dùng `this` được không?

A. Có  
B. Không, vì static không có object hiện tại  
C. Có, nếu property public  
D. Có, nếu property có cả get và set  

### Câu 35
Computed property là gì?

A. Property luôn có backing field riêng  
B. Property tính giá trị từ dữ liệu khác, thường chỉ có `get`  
C. Property không có kiểu dữ liệu  
D. Property chỉ dùng trong array  

### Câu 36
Ví dụ nào là computed property?

A.
```csharp
public string FullName
{
    get { return FirstName + " " + LastName; }
}
```

B.
```csharp
public string FullName;
```

C.
```csharp
public void FullName()
{
}
```

D.
```csharp
public class FullName
{
}
```

### Câu 37
Expression-bodied property đúng là:

A.
```csharp
public string FullName => FirstName + " " + LastName;
```

B.
```csharp
public string FullName -> FirstName + LastName;
```

C.
```csharp
public string FullName = > FirstName;
```

D.
```csharp
public void FullName => FirstName;
```

### Câu 38
Property có thể dùng trong constructor không?

A. Có  
B. Không  
C. Chỉ dùng được trong static constructor  
D. Chỉ dùng được nếu là write-only  

### Câu 39
Khi constructor gán qua property thay vì field, điều gì xảy ra?

A. Logic trong `set` vẫn được chạy  
B. `set` bị bỏ qua  
C. `get` tự động bị xóa  
D. Property biến thành field  

### Câu 40
Cho code:

```csharp
public Employee(string name)
{
    Name = name;
}
```

Nếu `Name` là property có kiểm tra độ dài trong `set`, phát biểu nào đúng?

A. Constructor sẽ đi qua logic kiểm tra của `set`  
B. Constructor luôn bỏ qua property  
C. Constructor không được gán property  
D. Constructor chỉ gọi `get`  

### Câu 41
Property có thể khai báo trong interface không?

A. Có  
B. Không  
C. Chỉ field mới được khai báo trong interface  
D. Chỉ constructor mới được khai báo trong interface  

### Câu 42
Interface property thường viết như thế nào?

A.
```csharp
string Name { get; set; }
```

B.
```csharp
string Name;
```

C.
```csharp
void Name { get; set; }
```

D.
```csharp
new Name();
```

### Câu 43
Abstract property nghĩa là gì?

A. Property có sẵn thân xử lý đầy đủ  
B. Property chỉ khai báo, class con phải triển khai  
C. Property không có kiểu dữ liệu  
D. Property chỉ dùng được với static class  

### Câu 44
Dạng abstract property đúng là:

A.
```csharp
public abstract string Name { get; set; }
```

B.
```csharp
public abstract string Name;
```

C.
```csharp
public abstract void Name { get; set; }
```

D.
```csharp
abstract public Name string();
```

### Câu 45
Property có thể `virtual` và `override` không?

A. Có  
B. Không  
C. Chỉ method mới được virtual  
D. Chỉ field mới được override  

### Câu 46
Code nào đúng về override property?

A.
```csharp
class A
{
    public virtual string Name { get; set; }
}

class B : A
{
    public override string Name { get; set; }
}
```

B.
```csharp
class A
{
    public string Name;
}

class B : A
{
    public override string Name;
}
```

C.
```csharp
class A
{
    public virtual void Name { get; set; }
}
```

D.
```csharp
class B : A
{
    public override Name string;
}
```

### Câu 47
Property có phải là biến cục bộ trong method không?

A. Có  
B. Không, property là member của class/struct/interface  
C. Có, nếu khai báo trong `Main`  
D. Có, nếu là auto property  

### Câu 48
Nếu property chỉ có `set`, dòng nào lỗi ở bên ngoài class?

A. `obj.Password = "123";`  
B. `Console.WriteLine(obj.Password);`  
C. Gán password mới  
D. Gọi constructor  

### Câu 49
Nếu property chỉ có `get`, dòng nào lỗi ở bên ngoài class?

A. `Console.WriteLine(obj.Id);`  
B. `int x = obj.Id;`  
C. `obj.Id = 10;`  
D. Đọc `obj.Id`  

### Câu 50
Chốt đúng nhất về property là gì?

A. Property là method bắt buộc gọi bằng `()`  
B. Property là cơ chế đóng gói dữ liệu, nhìn như field nhưng có thể kiểm soát đọc/ghi qua `get` và `set`  
C. Property chỉ dùng được trong static class  
D. Property không liên quan đến OOP  

---

## Đáp án nhanh

| Câu | Đáp án |
|---:|:---:|
| 1 | B |
| 2 | A |
| 3 | B |
| 4 | B |
| 5 | B |
| 6 | B |
| 7 | B |
| 8 | B |
| 9 | B |
| 10 | B |
| 11 | B |
| 12 | A |
| 13 | B |
| 14 | A |
| 15 | A |
| 16 | B |
| 17 | B |
| 18 | A |
| 19 | A |
| 20 | B |
| 21 | B |
| 22 | B |
| 23 | B |
| 24 | B |
| 25 | B |
| 26 | C |
| 27 | A |
| 28 | A |
| 29 | A |
| 30 | B |
| 31 | B |
| 32 | A |
| 33 | A |
| 34 | B |
| 35 | B |
| 36 | A |
| 37 | A |
| 38 | A |
| 39 | A |
| 40 | A |
| 41 | A |
| 42 | A |
| 43 | B |
| 44 | A |
| 45 | A |
| 46 | A |
| 47 | B |
| 48 | B |
| 49 | C |
| 50 | B |

---

## Giải thích siêu ngắn

| Câu | Ý chính cần nhớ |
|---:|---|
| 1 | Property là cổng kiểm soát dữ liệu. |
| 2 | Field lưu dữ liệu thật, property kiểm soát truy cập. |
| 3 | Đọc property thì chạy `get`. |
| 4 | Gán property thì chạy `set`. |
| 5 | `value` là giá trị đang được gán. |
| 6 | `name` là backing field. |
| 7 | `Name` là property. |
| 8 | Private field + public property giúp đóng gói dữ liệu. |
| 9 | `set` kiểm tra tuổi không âm. |
| 10 | Gán `emp.Name` gọi `set`. |
| 11 | Đọc `emp.Name` gọi `get`. |
| 12 | `{ get; set; }` là auto property. |
| 13 | Compiler tự tạo backing field ngầm cho auto property. |
| 14 | `{ get; }` là property chỉ đọc. |
| 15 | Bên ngoài chỉ đọc được property chỉ có `get`. |
| 16 | `{ set; }` là property chỉ ghi. |
| 17 | Write-only property khó đọc lại nên ít dùng. |
| 18 | `private set` khóa quyền gán từ bên ngoài. |
| 19 | Cú pháp đúng là `get; private set;`. |
| 20 | Bên ngoài đọc được `Id`. |
| 21 | Property không bắt buộc có cả `get` và `set`. |
| 22 | Property không gọi bằng ngoặc. |
| 23 | Dùng property giống field: `emp.Name`. |
| 24 | Property thường PascalCase. |
| 25 | Backing field thường camelCase hoặc `_camelCase`. |
| 26 | `EmpID` chỉ nhận 1000 đến 9999. |
| 27 | Không gán thì field giữ giá trị cũ. |
| 28 | Property có thể chứa validation. |
| 29 | Property có thể static. |
| 30 | Static property thuộc class/type. |
| 31 | Static property gọi bằng tên class. |
| 32 | `Config.AppName = "Demo";` là đúng. |
| 33 | Instance property có object hiện tại nên dùng được `this`. |
| 34 | Static property không có `this`. |
| 35 | Computed property tính kết quả từ dữ liệu khác. |
| 36 | `FullName` được tính từ `FirstName` và `LastName`. |
| 37 | `=>` là dạng expression-bodied property. |
| 38 | Constructor có thể gán property. |
| 39 | Gán qua property thì vẫn chạy `set`. |
| 40 | Constructor gán `Name = name` sẽ chạy validation trong `set`. |
| 41 | Interface có thể khai báo property. |
| 42 | Interface property thường chỉ khai báo `{ get; set; }`. |
| 43 | Abstract property bắt class con triển khai. |
| 44 | Abstract property không có thân xử lý. |
| 45 | Property có thể virtual/override. |
| 46 | Override property phải khớp với virtual property ở class cha. |
| 47 | Property là member, không phải biến cục bộ. |
| 48 | Write-only property không đọc được. |
| 49 | Read-only property không gán được bên ngoài. |
| 50 | Property giúp đóng gói dữ liệu qua `get` và `set`. |

---

## Bảng chốt nhanh

| Cú pháp | Ý nghĩa |
|---|---|
| `get` | Chạy khi đọc property |
| `set` | Chạy khi gán property |
| `value` | Giá trị đang được gán trong `set` |
| `private field` | Nơi lưu dữ liệu thật |
| `public property` | Cổng đọc/ghi dữ liệu |
| `{ get; set; }` | Auto property |
| `{ get; }` | Read-only property |
| `{ set; }` | Write-only property, ít dùng |
| `{ get; private set; }` | Ngoài đọc được, chỉ class tự gán được |
| `static property` | Property cấp class/type |

## Mẹo nhớ

```csharp
field     = biến thật, thường private
property  = cửa kiểm soát field, thường public
get       = đọc
set       = ghi
value     = giá trị đang được gán
```

Ví dụ chuẩn:

```csharp
class Employee
{
    private int empID;

    public int EmpID
    {
        get
        {
            return empID;
        }
        set
        {
            if (value >= 1000 && value <= 9999)
            {
                empID = value;
            }
            else
            {
                Console.WriteLine("EmpID phải có 4 chữ số");
            }
        }
    }
}
```
