# 50 câu trắc nghiệm C# - Chủ đề `Method`

## Phạm vi bao phủ

Bộ câu hỏi này bao phủ các ý chính:

- Method là gì
- Cấu trúc method: access modifier, return type, method name, parameter list
- `void`, `return`, kiểu trả về
- Method khác constructor
- Method có tham số, không tham số
- Biến cục bộ và phạm vi biến
- Pass by value
- `ref`, `out`, `params`
- Optional parameter, named argument
- Method overloading
- Static method và instance method
- `this` trong method
- Method nhận object, trả về object
- Reference type khi truyền vào method
- Method trong class/struct
- Method abstract, virtual, override
- Bẫy hay gặp khi thi và khi code

---

## Câu hỏi

### Câu 1
Method trong C# là gì?

A. Một biến dùng để lưu dữ liệu  
B. Một khối lệnh được đặt tên để thực hiện một hành động  
C. Một kiểu dữ liệu chỉ dùng cho số nguyên  
D. Một file chương trình riêng biệt  

### Câu 2
Cấu trúc tổng quát của method thường gồm gì?

A. `[access] [return type] [method name]([parameter list])`  
B. `[field] [class] [namespace]`  
C. `[return] [new] [object]`  
D. `[void] [constructor] [property]`  

### Câu 3
Trong khai báo sau, `public` là gì?

```csharp
public int Add(int x, int y)
{
    return x + y;
}
```

A. Kiểu trả về  
B. Quyền truy cập  
C. Tên method  
D. Tham số  

### Câu 4
Trong khai báo sau, `int` trước `Add` là gì?

```csharp
public int Add(int x, int y)
{
    return x + y;
}
```

A. Tên class  
B. Kiểu trả về của method  
C. Tên tham số  
D. Tên biến toàn cục  

### Câu 5
Trong khai báo sau, `Add` là gì?

```csharp
public int Add(int x, int y)
{
    return x + y;
}
```

A. Tên method  
B. Kiểu trả về  
C. Access modifier  
D. Namespace  

### Câu 6
Trong khai báo sau, `(int x, int y)` là gì?

```csharp
public int Add(int x, int y)
{
    return x + y;
}
```

A. Danh sách tham số đầu vào  
B. Danh sách class con  
C. Danh sách using  
D. Danh sách field static  

### Câu 7
Method có kiểu trả về là `void` nghĩa là gì?

A. Method bắt buộc trả về `int`  
B. Method không trả về giá trị  
C. Method không được gọi  
D. Method là constructor  

### Câu 8
Code nào đúng với method `void`?

A.
```csharp
public void Print()
{
    return 5;
}
```

B.
```csharp
public void Print()
{
    Console.WriteLine("Hello");
}
```

C.
```csharp
public void Print()
{
    return "Hello";
}
```

D.
```csharp
public void Print()
{
    return true;
}
```

### Câu 9
Method có kiểu trả về khác `void` thì bắt buộc phải làm gì?

A. Không được có tham số  
B. Phải có `return` trả về giá trị phù hợp  
C. Phải là static  
D. Phải trùng tên với class  

### Câu 10
Code nào đúng?

A.
```csharp
public int Add(int x, int y)
{
    Console.WriteLine(x + y);
}
```

B.
```csharp
public int Add(int x, int y)
{
    return x + y;
}
```

C.
```csharp
public int Add(int x, int y)
{
    return "hello";
}
```

D.
```csharp
public int Add(int x, int y)
{
    return;
}
```

### Câu 11
Lệnh `return` có tác dụng gì?

A. Chỉ in dữ liệu ra màn hình  
B. Kết thúc method và có thể trả kết quả ra ngoài  
C. Tạo object mới  
D. Tạo namespace mới  

### Câu 12
Cho code:

```csharp
public int Test()
{
    Console.WriteLine("A");
    return 5;
    Console.WriteLine("B");
}
```

Dòng `Console.WriteLine("B");` sẽ thế nào?

A. Chạy bình thường  
B. Không chạy vì nằm sau `return`  
C. Chạy trước dòng `"A"`  
D. Chỉ chạy khi `return` là 0  

### Câu 13
Method khác constructor ở điểm nào?

A. Method bắt buộc cùng tên class  
B. Method có kiểu trả về hoặc `void`, constructor thì không có kiểu trả về  
C. Constructor phải có kiểu trả về  
D. Method tự chạy khi `new object`  

### Câu 14
Code nào là method, không phải constructor?

A.
```csharp
public Car()
{
}
```

B.
```csharp
public void Car()
{
}
```

C.
```csharp
Car()
{
}
```

D.
```csharp
static Car()
{
}
```

### Câu 15
Constructor chạy khi nào?

A. Khi được gọi bằng dấu `()` như method thường  
B. Khi tạo object bằng `new`  
C. Khi đọc field  
D. Khi kết thúc chương trình  

### Câu 16
Method thường chạy khi nào?

A. Tự chạy khi class được khai báo  
B. Chỉ chạy khi được gọi  
C. Tự chạy trước `Main`  
D. Luôn chạy cùng constructor  

### Câu 17
Method không có tham số vẫn phải gọi bằng gì?

A. Không cần dấu gì  
B. Dấu ngoặc `()`  
C. Dấu `[]`  
D. Dấu `{}`  

### Câu 18
Cách gọi method đúng là:

A. `myCar.PrintState;`  
B. `myCar.PrintState();`  
C. `myCar.PrintState{};`  
D. `myCar.PrintState[];`  

### Câu 19
Field/property và method khác nhau khi gọi thế nào?

A. Field/property thường không có `()`, method có `()`  
B. Field/property luôn có `()`  
C. Method không bao giờ có `()`  
D. Không khác nhau  

### Câu 20
Biến khai báo bên trong method gọi là gì?

A. Static field  
B. Local variable  
C. Namespace  
D. Constructor  

### Câu 21
Biến cục bộ trong method sống đến khi nào?

A. Sống mãi trong toàn chương trình  
B. Chỉ sống trong method/block nơi nó được khai báo  
C. Sống trong tất cả class  
D. Sống trong mọi namespace  

### Câu 22
Cho code:

```csharp
static void Test()
{
    int x = 10;
}

static void Main()
{
    Test();
    Console.WriteLine(x);
}
```

Code bị lỗi vì sao?

A. `x` chỉ tồn tại trong method `Test`  
B. `Test` không được gọi  
C. `x` là static field  
D. `Console.WriteLine` không nhận int  

### Câu 23
Tham số truyền vào method được hiểu như gì?

A. Biến cục bộ của method  
B. Biến toàn cục của chương trình  
C. Field bắt buộc của class  
D. Constructor ẩn  

### Câu 24
Mặc định, kiểu dữ liệu như `int`, `double`, `bool` truyền vào method theo kiểu gì?

A. Pass by reference  
B. Pass by value  
C. Pass by pointer bắt buộc  
D. Pass by property  

### Câu 25
Cho code:

```csharp
static void Change(int x)
{
    x = 100;
}

int a = 5;
Change(a);
Console.WriteLine(a);
```

Kết quả in ra là gì?

A. 5  
B. 100  
C. 0  
D. Lỗi vì không dùng `return`  

### Câu 26
Vì sao câu 25 vẫn in ra `5`?

A. Vì `int` không thể gán lại  
B. Vì method nhận bản copy của `a`  
C. Vì `Console.WriteLine` bị lỗi  
D. Vì `Change` là constructor  

### Câu 27
Từ khóa `ref` dùng để làm gì?

A. Truyền biến gốc vào method để method có thể sửa biến gốc  
B. Tạo object mới  
C. Khai báo class con  
D. Chặn method trả về giá trị  

### Câu 28
Với `ref`, cần viết `ref` ở đâu?

A. Chỉ ở nơi khai báo method  
B. Chỉ ở nơi gọi method  
C. Cả nơi khai báo method và nơi gọi method  
D. Không cần viết ở đâu  

### Câu 29
Code nào đúng với `ref`?

A.
```csharp
static void Change(ref int x)
{
    x = 100;
}

int a = 5;
Change(ref a);
```

B.
```csharp
static void Change(ref int x)
{
    x = 100;
}

int a = 5;
Change(a);
```

C.
```csharp
static void Change(int x)
{
    x = 100;
}

int a = 5;
Change(ref a);
```

D.
```csharp
static void Change(ref int x)
{
}

Change(ref 5);
```

### Câu 30
Từ khóa `out` khác `ref` ở điểm quan trọng nào?

A. `out` bắt method phải gán giá trị trước khi thoát  
B. `out` không truyền được biến  
C. `out` chỉ dùng cho string  
D. `out` không cần khai báo trong method  

### Câu 31
Biến truyền bằng `out` trước khi gọi method có bắt buộc phải có giá trị chưa?

A. Có  
B. Không bắt buộc  
C. Bắt buộc phải là 0  
D. Bắt buộc phải là null  

### Câu 32
Code nào đúng với `out`?

A.
```csharp
static void GetValue(out int x)
{
    x = 10;
}
```

B.
```csharp
static void GetValue(out int x)
{
    Console.WriteLine("Hello");
}
```

C.
```csharp
static void GetValue(out int x)
{
    int y = x + 1;
}
```

D.
```csharp
static void GetValue(int out x)
{
    x = 10;
}
```

### Câu 33
`params` dùng để làm gì?

A. Cho phép truyền số lượng tham số không cố định  
B. Bắt method không có tham số  
C. Làm method thành constructor  
D. Làm tham số thành private  

### Câu 34
`params` phải đứng ở đâu trong danh sách tham số?

A. Đầu tiên  
B. Bất kỳ đâu  
C. Cuối cùng  
D. Trước mọi tham số optional  

### Câu 35
Code nào đúng với `params`?

A.
```csharp
static int Sum(params int[] numbers)
{
    return numbers.Length;
}
```

B.
```csharp
static int Sum(params int[] numbers, string name)
{
    return 0;
}
```

C.
```csharp
static int Sum(params int numbers)
{
    return numbers;
}
```

D.
```csharp
static int Sum(int params[] numbers)
{
    return 0;
}
```

### Câu 36
Optional parameter là gì?

A. Tham số có giá trị mặc định  
B. Tham số bắt buộc phải truyền  
C. Tham số chỉ dùng trong constructor  
D. Tham số không có kiểu dữ liệu  

### Câu 37
Code nào đúng về optional parameter?

A.
```csharp
static void Log(string owner = "Programmer", string message)
{
}
```

B.
```csharp
static void Log(string message, string owner = "Programmer")
{
}
```

C.
```csharp
static void Log(string message = "Error", string owner)
{
}
```

D.
```csharp
static void Log(default string message)
{
}
```

### Câu 38
Quy tắc của optional parameter là gì?

A. Tham số có mặc định phải đứng trước tham số không mặc định  
B. Tham số có mặc định phải đứng sau tham số không mặc định  
C. Tất cả tham số đều phải có mặc định  
D. Không được có tham số nào có mặc định  

### Câu 39
Method overloading là gì?

A. Nhiều method cùng tên nhưng khác danh sách tham số  
B. Nhiều class cùng tên  
C. Một method gọi chính nó  
D. Một field có nhiều giá trị  

### Câu 40
Yếu tố nào tạo overload hợp lệ?

A. Khác số lượng tham số  
B. Khác kiểu tham số  
C. Khác thứ tự kiểu tham số  
D. Cả A, B, C đều đúng  

### Câu 41
Khác kiểu trả về có đủ để overload method không?

A. Có  
B. Không  
C. Chỉ đủ với static method  
D. Chỉ đủ với method `void`  

### Câu 42
Code nào bị lỗi do overload sai?

A.
```csharp
int Add(int a, int b) { return a + b; }
int Add(int a, int b, int c) { return a + b + c; }
```

B.
```csharp
int Add(int a, int b) { return a + b; }
double Add(double a, double b) { return a + b; }
```

C.
```csharp
int Add(int a, int b) { return a + b; }
double Add(int x, int y) { return x + y; }
```

D.
```csharp
void Show(int x, string y) { }
void Show(string x, int y) { }
```

### Câu 43
Tên tham số khác nhau có tạo overload mới không?

A. Có  
B. Không  
C. Chỉ khi kiểu trả về khác  
D. Chỉ khi method là public  

### Câu 44
Instance method thường gọi bằng gì?

A. Tên object  
B. Tên namespace  
C. Từ khóa `return`  
D. Tên file  

### Câu 45
Static method thường gọi bằng gì?

A. Tên class  
B. Tên object bắt buộc  
C. Từ khóa `this`  
D. Tên biến local  

### Câu 46
Trong static method có dùng trực tiếp `this` được không?

A. Có  
B. Không  
C. Chỉ được nếu method public  
D. Chỉ được nếu method trả về `void`  

### Câu 47
Trong instance method, `this` là gì?

A. Object hiện tại đang gọi method  
B. Class cha  
C. Namespace hiện tại  
D. Kiểu trả về của method  

### Câu 48
Cho code:

```csharp
class Car
{
    public int speed;

    public void SpeedUp(int speed)
    {
        this.speed += speed;
    }
}
```

`this.speed` là gì?

A. Tham số của method  
B. Field của object hiện tại  
C. Tên class  
D. Static method  

### Câu 49
Truyền object kiểu class vào method, nếu method sửa field của object thì bên ngoài có thấy đổi không?

A. Có, vì hai biến cùng tham chiếu đến một object  
B. Không bao giờ  
C. Chỉ thấy đổi nếu object là struct  
D. Chỉ thấy đổi nếu method trả về int  

### Câu 50
Chốt đúng nhất về method là gì?

A. Method là biến lưu dữ liệu của object  
B. Method là hành động/chức năng, có thể nhận tham số, xử lý, và có hoặc không trả kết quả  
C. Method luôn tự chạy khi tạo class  
D. Method bắt buộc phải là static  

---

## Đáp án nhanh

| Câu | Đáp án |
|---:|:---:|
| 1 | B |
| 2 | A |
| 3 | B |
| 4 | B |
| 5 | A |
| 6 | A |
| 7 | B |
| 8 | B |
| 9 | B |
| 10 | B |
| 11 | B |
| 12 | B |
| 13 | B |
| 14 | B |
| 15 | B |
| 16 | B |
| 17 | B |
| 18 | B |
| 19 | A |
| 20 | B |
| 21 | B |
| 22 | A |
| 23 | A |
| 24 | B |
| 25 | A |
| 26 | B |
| 27 | A |
| 28 | C |
| 29 | A |
| 30 | A |
| 31 | B |
| 32 | A |
| 33 | A |
| 34 | C |
| 35 | A |
| 36 | A |
| 37 | B |
| 38 | B |
| 39 | A |
| 40 | D |
| 41 | B |
| 42 | C |
| 43 | B |
| 44 | A |
| 45 | A |
| 46 | B |
| 47 | A |
| 48 | B |
| 49 | A |
| 50 | B |

---

## Giải thích siêu ngắn

| Câu | Ý chính cần nhớ |
|---:|---|
| 1 | Method là khối lệnh có tên, dùng để thực hiện hành động. |
| 2 | Method gồm quyền truy cập, kiểu trả về, tên, danh sách tham số. |
| 3 | `public` là quyền truy cập. |
| 4 | `int` trước tên method là kiểu trả về. |
| 5 | `Add` là tên method. |
| 6 | `(int x, int y)` là danh sách tham số. |
| 7 | `void` nghĩa là không trả giá trị. |
| 8 | Method `void` không được `return 5`. |
| 9 | Method có kiểu trả về phải return đúng kiểu. |
| 10 | `return x + y;` đúng với method trả về `int`. |
| 11 | `return` làm method kết thúc và có thể trả kết quả. |
| 12 | Code sau `return` không chạy. |
| 13 | Method có kiểu trả về hoặc `void`, constructor thì không. |
| 14 | `public void Car()` là method thường tên `Car`, không phải constructor. |
| 15 | Constructor chạy khi `new object`. |
| 16 | Method chỉ chạy khi được gọi. |
| 17 | Method không tham số vẫn cần `()`. |
| 18 | Gọi method phải có `()`. |
| 19 | Field/property không có `()`, method có `()`. |
| 20 | Biến trong method là local variable. |
| 21 | Biến cục bộ chỉ sống trong phạm vi khai báo. |
| 22 | `x` nằm trong `Test`, `Main` không thấy. |
| 23 | Tham số là biến cục bộ của method. |
| 24 | Mặc định là pass by value. |
| 25 | `a` vẫn là 5 vì method sửa bản copy. |
| 26 | `x` trong method không phải chính biến `a`. |
| 27 | `ref` cho method sửa biến gốc. |
| 28 | `ref` phải có ở cả khai báo và lúc gọi. |
| 29 | Cú pháp `ref` đúng phải khớp hai bên. |
| 30 | `out` bắt buộc được gán trước khi method kết thúc. |
| 31 | Biến `out` trước khi truyền chưa cần có giá trị. |
| 32 | `out int x` phải được gán `x = ...`. |
| 33 | `params` nhận số lượng tham số linh hoạt. |
| 34 | `params` phải là tham số cuối. |
| 35 | `params int[] numbers` là cú pháp đúng. |
| 36 | Optional parameter là tham số có giá trị mặc định. |
| 37 | Tham số mặc định đặt sau tham số thường. |
| 38 | Optional parameter phải đứng cuối nhóm tham số bắt buộc. |
| 39 | Overloading là cùng tên, khác tham số. |
| 40 | Khác số lượng, kiểu, hoặc thứ tự kiểu đều tạo overload. |
| 41 | Chỉ khác kiểu trả về không đủ để overload. |
| 42 | `Add(int,int)` bị trùng chữ ký dù kiểu trả về khác. |
| 43 | Tên tham số không tạo overload mới. |
| 44 | Instance method gọi qua object. |
| 45 | Static method gọi qua class. |
| 46 | Static method không có `this`. |
| 47 | `this` là object hiện tại. |
| 48 | `this.speed` là field của object hiện tại. |
| 49 | Class là reference type, sửa nội dung object thì bên ngoài thấy. |
| 50 | Method là hành động/chức năng xử lý dữ liệu. |

---

## Bảng chốt nhanh

| Chủ đề | Luật cần nhớ |
|---|---|
| Method thường | Chỉ chạy khi được gọi |
| Constructor | Tự chạy khi `new object` |
| `void` | Không trả giá trị |
| Method trả về `int/string/...` | Bắt buộc `return` đúng kiểu |
| `return` | Kết thúc method ngay |
| Tham số thường | Pass by value |
| `ref` | Sửa được biến gốc, biến phải có giá trị trước |
| `out` | Method bắt buộc gán giá trị ra |
| `params` | Nhận nhiều tham số, phải đứng cuối |
| Optional parameter | Có giá trị mặc định, đặt sau tham số thường |
| Overloading | Cùng tên, khác danh sách tham số |
| Static method | Gọi bằng class, không có `this` |
| Instance method | Gọi bằng object, có `this` |
| Method | Gọi bằng `()` |
| Field/property | Không gọi bằng `()` |

## Mẹo nhớ

```csharp
method = hành động
field/property = dữ liệu

object.Method();   // method có ngoặc
object.Field;      // field không ngoặc
object.Property;   // property không ngoặc
```

Ví dụ chuẩn:

```csharp
class Calculator
{
    public int Add(int x, int y)
    {
        return x + y;
    }

    public void PrintResult(int result)
    {
        Console.WriteLine(result);
    }
}
```

Ví dụ `ref`, `out`, `params`:

```csharp
static void Change(ref int x)
{
    x = 100;
}

static void GetValue(out int x)
{
    x = 10;
}

static int Sum(params int[] numbers)
{
    int total = 0;

    foreach (int n in numbers)
    {
        total += n;
    }

    return total;
}
```
