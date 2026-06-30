# 50 câu trắc nghiệm C# - Dự đoán kết quả & Phát hiện lỗi

## Mục tiêu

Bộ câu hỏi này tập trung vào 2 dạng hay gặp khi đi thi C#:

1. **Dự đoán kết quả:** phân tích logic luồng chạy, xác định giá trị biến hoặc kết quả in ra màn hình.
2. **Phát hiện lỗi:** nhận diện lỗi cú pháp, lỗi vi phạm OOP, lỗi access modifier, lỗi interface, lỗi ép kiểu, lỗi runtime.

---

# Phần A - Dự đoán kết quả in ra màn hình

## Câu 1

```csharp
Console.WriteLine(true);
Console.WriteLine(false);
```

Kết quả là gì?

A.
```text
true
false
```

B.
```text
True
False
```

C.
```text
1
0
```

D. Lỗi compile

**Đáp án: B**

**Giải thích:** Trong C#, `bool` khi in ra bằng `Console.WriteLine()` sẽ hiện `True` hoặc `False`.

---

## Câu 2

```csharp
char c = 'A';
string s = "A";

Console.WriteLine(c);
Console.WriteLine(s);
```

Kết quả là gì?

A.
```text
A
A
```

B.
```text
'A'
"A"
```

C.
```text
char
string
```

D. Lỗi vì `char` và `string` không in được

**Đáp án: A**

**Giải thích:** Khi in ra màn hình, cả ký tự `'A'` và chuỗi `"A"` đều hiển thị là `A`.

---

## Câu 3

```csharp
int a = 5;
int b = 2;

Console.WriteLine(a / b);
```

Kết quả là gì?

A. `2.5`  
B. `2`  
C. `3`  
D. Lỗi runtime  

**Đáp án: B**

**Giải thích:** `int / int` cho kết quả nguyên, phần thập phân bị bỏ.

---

## Câu 4

```csharp
double a = 5;
int b = 2;

Console.WriteLine(a / b);
```

Kết quả là gì?

A. `2`  
B. `2.5`  
C. `3`  
D. Lỗi compile  

**Đáp án: B**

**Giải thích:** Có `double` tham gia nên phép chia trả về số thực.

---

## Câu 5

```csharp
string name = "An";
int age = 20;

Console.WriteLine("Name: " + name + ", Age: " + age);
```

Kết quả là gì?

A. `Name: An, Age: 20`  
B. `Name: name, Age: age`  
C. `An20`  
D. Lỗi vì không cộng được string và int  

**Đáp án: A**

**Giải thích:** Khi cộng chuỗi với số, C# chuyển số thành chuỗi rồi ghép.

---

## Câu 6

```csharp
string folder = "data";

Console.WriteLine($@"C:\{folder}\file.txt");
```

Kết quả là gì?

A. `C:\data\file.txt`  
B. `C:{folder}file.txt`  
C. `C:\{folder}\file.txt`  
D. Lỗi vì không kết hợp được `$` và `@`  

**Đáp án: A**

**Giải thích:** `$` cho phép nội suy biến, `@` giữ nguyên dấu `\`.

---

## Câu 7

```csharp
int x = 10;
x += 5;
x -= 3;

Console.WriteLine(x);
```

Kết quả là gì?

A. `10`  
B. `12`  
C. `15`  
D. `18`  

**Đáp án: B**

**Giải thích:** `x = 10 + 5 - 3 = 12`.

---

## Câu 8

```csharp
class Car
{
    public string name = "A";

    public Car()
    {
        name = "B";
    }
}

Car c = new Car();
Console.WriteLine(c.name);
```

Kết quả là gì?

A. `A`  
B. `B`  
C. `null`  
D. Lỗi vì constructor không được gán field  

**Đáp án: B**

**Giải thích:** Field initializer chạy trước, sau đó constructor ghi đè `name = "B"`.

---

## Câu 9

```csharp
class User
{
    public string name;

    public User(string name)
    {
        this.name = name;
    }
}

User u = new User("Nam");
Console.WriteLine(u.name);
```

Kết quả là gì?

A. `null`  
B. `name`  
C. `Nam`  
D. Lỗi vì dùng `this` sai  

**Đáp án: C**

**Giải thích:** `this.name` là field của object hiện tại, còn `name` là tham số constructor.

---

## Câu 10

```csharp
class Counter
{
    public static int Count = 0;

    public Counter()
    {
        Count++;
    }
}

Counter a = new Counter();
Counter b = new Counter();

Console.WriteLine(Counter.Count);
```

Kết quả là gì?

A. `0`  
B. `1`  
C. `2`  
D. Lỗi vì static không đổi được  

**Đáp án: C**

**Giải thích:** `Count` là static field dùng chung, mỗi lần tạo object thì tăng 1.

---

## Câu 11

```csharp
class Test
{
    public static void Print()
    {
        Console.WriteLine("Static");
    }
}

Test.Print();
```

Kết quả là gì?

A. `Static`  
B. Lỗi vì phải tạo object trước  
C. Lỗi vì static không được in  
D. Không in gì  

**Đáp án: A**

**Giải thích:** Static method được gọi bằng tên class.

---

## Câu 12

```csharp
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

Kết quả là gì?

A. `Animal`  
B. `Dog`  
C. Lỗi ép kiểu  
D. Lỗi vì không gọi được override qua biến cha  

**Đáp án: B**

**Giải thích:** `virtual/override` cho đa hình runtime. Object thật là `Dog`.

---

## Câu 13

```csharp
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

Kết quả là gì?

A. `Animal`  
B. `Dog`  
C. Lỗi vì dùng `new` sai  
D. Lỗi runtime  

**Đáp án: A**

**Giải thích:** `new` che giấu method, không tạo đa hình runtime như `override`.

---

## Câu 14

```csharp
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

Dog d = new Dog();
d.Speak();
```

Kết quả là gì?

A. `Animal`  
B. `Dog`  
C. Lỗi compile  
D. Không in gì  

**Đáp án: B**

**Giải thích:** Biến có kiểu `Dog`, nên gọi method `Speak()` của `Dog`.

---

## Câu 15

```csharp
interface IAnimal
{
    void Speak();
}

class Cat : IAnimal
{
    public void Speak()
    {
        Console.WriteLine("Meow");
    }
}

IAnimal a = new Cat();
a.Speak();
```

Kết quả là gì?

A. `IAnimal`  
B. `Cat`  
C. `Meow`  
D. Lỗi vì interface không tạo được object  

**Đáp án: C**

**Giải thích:** Biến kiểu interface trỏ tới object `Cat`, nên gọi implementation của `Cat`.

---

## Câu 16

```csharp
interface IA
{
    void Run();
}

class Robot : IA
{
    void IA.Run()
    {
        Console.WriteLine("IA Run");
    }
}

IA r = new Robot();
r.Run();
```

Kết quả là gì?

A. `IA Run`  
B. `Robot Run`  
C. Lỗi vì explicit interface implementation không gọi được  
D. Không in gì  

**Đáp án: A**

**Giải thích:** Method explicit gọi được qua biến kiểu interface `IA`.

---

## Câu 17

```csharp
try
{
    Console.WriteLine("A");
    int x = int.Parse("abc");
    Console.WriteLine("B");
}
catch
{
    Console.WriteLine("C");
}
finally
{
    Console.WriteLine("D");
}
```

Kết quả là gì?

A.
```text
A
B
C
D
```

B.
```text
A
C
D
```

C.
```text
C
D
```

D.
```text
A
D
```

**Đáp án: B**

**Giải thích:** `int.Parse("abc")` gây lỗi, dòng `"B"` không chạy, vào `catch`, sau đó chạy `finally`.

---

## Câu 18

```csharp
try
{
    Console.WriteLine("A");
}
catch
{
    Console.WriteLine("B");
}
finally
{
    Console.WriteLine("C");
}
```

Kết quả là gì?

A.
```text
A
B
C
```

B.
```text
A
C
```

C.
```text
B
C
```

D. Không in gì

**Đáp án: B**

**Giải thích:** Không có lỗi nên không vào `catch`, nhưng `finally` vẫn chạy.

---

## Câu 19

```csharp
static int Test()
{
    try
    {
        return 1;
    }
    finally
    {
        Console.WriteLine("Finally");
    }
}

Console.WriteLine(Test());
```

Kết quả là gì?

A.
```text
1
Finally
```

B.
```text
Finally
1
```

C. `1`  
D. Lỗi vì `finally` không chạy khi có `return`  

**Đáp án: B**

**Giải thích:** Trước khi method thật sự trả về `1`, khối `finally` vẫn chạy.

---

## Câu 20

```csharp
class Car
{
    public int speed;
}

Car c1 = new Car();
c1.speed = 10;

Car c2 = c1;
c2.speed = 99;

Console.WriteLine(c1.speed);
```

Kết quả là gì?

A. `10`  
B. `99`  
C. `0`  
D. Lỗi vì class không copy được  

**Đáp án: B**

**Giải thích:** Class là reference type. `c1` và `c2` cùng trỏ tới một object.

---

## Câu 21

```csharp
struct Point
{
    public int X;
}

Point p1 = new Point();
p1.X = 10;

Point p2 = p1;
p2.X = 99;

Console.WriteLine(p1.X);
```

Kết quả là gì?

A. `10`  
B. `99`  
C. `0`  
D. Lỗi vì struct không copy được  

**Đáp án: A**

**Giải thích:** Struct là value type. `p2 = p1` tạo bản copy độc lập.

---

## Câu 22

```csharp
static void Change(int x)
{
    x = 100;
}

int a = 5;
Change(a);
Console.WriteLine(a);
```

Kết quả là gì?

A. `5`  
B. `100`  
C. `0`  
D. Lỗi vì method không trả về gì  

**Đáp án: A**

**Giải thích:** Truyền `int` mặc định là truyền giá trị, method chỉ sửa bản copy.

---

## Câu 23

```csharp
static void Change(ref int x)
{
    x = 100;
}

int a = 5;
Change(ref a);
Console.WriteLine(a);
```

Kết quả là gì?

A. `5`  
B. `100`  
C. `0`  
D. Lỗi vì `ref` không sửa biến gốc  

**Đáp án: B**

**Giải thích:** `ref` cho method sửa trực tiếp biến gốc.

---

## Câu 24

```csharp
static void Fill(out int x)
{
    x = 10;
}

int a;
Fill(out a);
Console.WriteLine(a);
```

Kết quả là gì?

A. `0`  
B. `10`  
C. Lỗi vì `a` chưa khởi tạo  
D. Lỗi vì `out` không được gán  

**Đáp án: B**

**Giải thích:** `out` cho phép biến chưa có giá trị trước khi truyền, nhưng method phải gán giá trị.

---

## Câu 25

```csharp
static int Add(int a, int b = 5)
{
    return a + b;
}

Console.WriteLine(Add(3));
```

Kết quả là gì?

A. `3`  
B. `5`  
C. `8`  
D. Lỗi vì thiếu tham số thứ hai  

**Đáp án: C**

**Giải thích:** `b` có giá trị mặc định là `5`.

---

# Phần B - Phát hiện lỗi cú pháp, lỗi OOP, lỗi ép kiểu

## Câu 26

```csharp
char c = 'AB';
Console.WriteLine(c);
```

Lỗi là gì?

A. Không lỗi  
B. `char` chỉ chứa một ký tự  
C. Phải dùng `Console.Write()`  
D. `char` không in được  

**Đáp án: B**

**Giải thích:** `'AB'` sai vì `char` chỉ chứa đúng một ký tự. Chuỗi nhiều ký tự phải dùng `"AB"`.

---

## Câu 27

```csharp
var message = "Hello";
message = 123;
```

Lỗi là gì?

A. Không lỗi vì `var` đổi kiểu được  
B. Lỗi vì `message` đã được suy luận là `string`  
C. Lỗi vì `var` chỉ dùng cho số  
D. Lỗi vì `123` không phải object  

**Đáp án: B**

**Giải thích:** `var` chỉ tự suy luận kiểu lúc khai báo. Sau đó biến vẫn có kiểu cố định.

---

## Câu 28

```csharp
int x;
Console.WriteLine(x);
```

Lỗi là gì?

A. Không lỗi, in `0`  
B. Lỗi vì biến cục bộ chưa được gán giá trị  
C. Lỗi vì `int` không in được  
D. Lỗi vì thiếu constructor  

**Đáp án: B**

**Giải thích:** Biến local trong method không tự có giá trị mặc định để dùng ngay.

---

## Câu 29

```csharp
class Car
{
    public void Car()
    {
        Console.WriteLine("Hello");
    }
}

Car c = new Car();
```

Phát biểu nào đúng?

A. `public void Car()` là constructor thật  
B. `public void Car()` chỉ là method thường tên `Car`  
C. Code luôn lỗi compile  
D. `new Car()` sẽ gọi `public void Car()`  

**Đáp án: B**

**Giải thích:** Constructor không có kiểu trả về. Viết `void` thì nó là method thường.

---

## Câu 30

```csharp
class Car
{
    public Car(string name)
    {
    }
}

Car c = new Car();
```

Lỗi là gì?

A. Không lỗi vì C# tự tạo constructor rỗng  
B. Lỗi vì đã viết constructor có tham số nên C# không tự tạo constructor rỗng nữa  
C. Lỗi vì constructor không được có tham số  
D. Lỗi vì class phải static  

**Đáp án: B**

**Giải thích:** Khi đã tự viết constructor bất kỳ, default constructor không còn được tự sinh.

---

## Câu 31

```csharp
class User
{
    private string name;
}

User u = new User();
u.name = "An";
```

Lỗi là gì?

A. `name` là `private`, bên ngoài class không truy cập được  
B. `string` không dùng trong class  
C. Object `u` không tạo được  
D. `private` chỉ dùng cho method  

**Đáp án: A**

**Giải thích:** `private` chỉ truy cập được bên trong chính class chứa nó.

---

## Câu 32

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
        a.age = 10;
    }
}
```

Lỗi là gì?

A. `protected` chỉ truy cập được trong class hiện tại hoặc class dẫn xuất  
B. `protected` giống `public` nên không lỗi  
C. `age` phải là static  
D. `Animal` không được tạo object  

**Đáp án: A**

**Giải thích:** Code bên ngoài không thể truy cập trực tiếp member `protected`.

---

## Câu 33

```csharp
class Animal
{
    private int age;
}

class Dog : Animal
{
    void Test()
    {
        age = 5;
    }
}
```

Lỗi là gì?

A. Class con không truy cập trực tiếp được `private` field của class cha  
B. Class con không thể kế thừa class cha  
C. `age` phải là public static  
D. Không lỗi  

**Đáp án: A**

**Giải thích:** Muốn class con truy cập được thì field nên là `protected`, không phải `private`.

---

## Câu 34

```csharp
abstract class Animal
{
    public abstract void Speak()
    {
        Console.WriteLine("Animal");
    }
}
```

Lỗi là gì?

A. Abstract method không được có thân hàm trong abstract class cơ bản  
B. Abstract class không được có method  
C. `Speak()` bắt buộc phải private  
D. Không lỗi  

**Đáp án: A**

**Giải thích:** `abstract void Speak();` chỉ khai báo, không viết `{ }`.

---

## Câu 35

```csharp
abstract class Animal
{
    public abstract void Speak();
}

class Dog : Animal
{
}
```

Lỗi là gì?

A. `Dog` không implement method abstract `Speak()`  
B. Abstract class không được kế thừa  
C. `Dog` phải là struct  
D. Không lỗi  

**Đáp án: A**

**Giải thích:** Class không abstract kế thừa abstract class phải override đủ abstract member.

---

## Câu 36

```csharp
sealed class Animal
{
}

class Dog : Animal
{
}
```

Lỗi là gì?

A. Không lỗi  
B. Không thể kế thừa class đã `sealed`  
C. `sealed` chỉ dùng cho method  
D. `Dog` phải thêm `override`  

**Đáp án: B**

**Giải thích:** `sealed` chặn class khác kế thừa.

---

## Câu 37

```csharp
interface IAnimal
{
    void Speak();
}

class Dog : IAnimal
{
    void Speak()
    {
        Console.WriteLine("Dog");
    }
}
```

Lỗi là gì?

A. Method implement interface phải public nếu implement ngầm định  
B. Interface không được có method  
C. Class không được implement interface  
D. Không lỗi  

**Đáp án: A**

**Giải thích:** `void Speak()` trong class mặc định là private, không thỏa hợp đồng interface.

---

## Câu 38

```csharp
interface IAnimal
{
    int age;
}
```

Lỗi là gì?

A. Interface không chứa field dữ liệu trực tiếp  
B. Interface không được public  
C. `int` không dùng được trong interface  
D. Không lỗi  

**Đáp án: A**

**Giải thích:** Interface nên khai báo property, method, event, indexer; không chứa field dữ liệu trực tiếp.

---

## Câu 39

```csharp
interface IAnimal
{
    IAnimal()
    {
    }
}
```

Lỗi là gì?

A. Interface không có constructor  
B. Constructor phải static  
C. Constructor phải private  
D. Không lỗi  

**Đáp án: A**

**Giải thích:** Interface không tạo object trực tiếp, nên không có constructor kiểu class.

---

## Câu 40

```csharp
interface IAnimal
{
    void Speak();
}

IAnimal a = new IAnimal();
```

Lỗi là gì?

A. Không thể tạo object trực tiếp từ interface  
B. Interface không được dùng làm kiểu biến  
C. `new` chỉ dùng cho struct  
D. Không lỗi  

**Đáp án: A**

**Giải thích:** Có thể khai báo biến kiểu interface, nhưng object thật phải là class/struct implement interface.

---

## Câu 41

```csharp
class Animal
{
}

class Dog
{
}

Dog d = (Dog)new Animal();
```

Lỗi là gì?

A. Lỗi runtime hoặc compile vì hai kiểu không có quan hệ kế thừa phù hợp  
B. Không lỗi vì mọi class ép kiểu được với nhau  
C. `Dog` tự động nhận dữ liệu của `Animal`  
D. `Animal` tự biến thành `Dog`  

**Đáp án: A**

**Giải thích:** Ép kiểu object chỉ hợp lệ khi có quan hệ kế thừa/interface phù hợp.

---

## Câu 42

```csharp
class Animal
{
}

class Dog : Animal
{
}

Animal a = new Animal();
Dog d = (Dog)a;
```

Lỗi là gì?

A. Không lỗi, vì `Animal` là cha của `Dog`  
B. Lỗi runtime vì object thật là `Animal`, không phải `Dog`  
C. Lỗi compile vì không được downcast  
D. Lỗi vì phải dùng `new Dog(a)`  

**Đáp án: B**

**Giải thích:** Downcast chỉ an toàn nếu object thật là kiểu con tương ứng.

---

## Câu 43

```csharp
class Animal
{
}

class Dog : Animal
{
}

Animal a = new Dog();
Dog d = (Dog)a;
```

Đoạn code này thế nào?

A. Đúng, vì object thật là `Dog`  
B. Sai compile  
C. Sai runtime  
D. Sai vì class cha không được giữ object con  

**Đáp án: A**

**Giải thích:** `a` có kiểu khai báo là `Animal`, nhưng object thật là `Dog`, nên ép về `Dog` được.

---

## Câu 44

```csharp
static void Change(ref int x)
{
    x = 10;
}

int a = 1;
Change(a);
```

Lỗi là gì?

A. Khi method yêu cầu `ref`, lúc gọi cũng phải ghi `ref`  
B. `ref` không dùng cho int  
C. `ref` chỉ dùng với string  
D. Không lỗi  

**Đáp án: A**

**Giải thích:** Phải gọi `Change(ref a);`.

---

## Câu 45

```csharp
static void Fill(out int x)
{
    Console.WriteLine("Hello");
}
```

Lỗi là gì?

A. Method có tham số `out` phải gán giá trị cho `x` trước khi thoát  
B. `out` không dùng được trong method static  
C. `Console.WriteLine()` không được dùng với `out`  
D. Không lỗi  

**Đáp án: A**

**Giải thích:** `out` bắt buộc phải được gán trong method.

---

## Câu 46

```csharp
static void Test(int x = 0, int y)
{
}
```

Lỗi là gì?

A. Tham số có giá trị mặc định phải đứng sau tham số không có mặc định  
B. `int` không được có giá trị mặc định  
C. Method static không được có tham số  
D. Không lỗi  

**Đáp án: A**

**Giải thích:** Đúng phải là `static void Test(int y, int x = 0)`.

---

## Câu 47

```csharp
static void Print(params int[] numbers, string name)
{
}
```

Lỗi là gì?

A. `params` phải là tham số cuối cùng  
B. `params` chỉ dùng với string  
C. `params` không dùng trong static method  
D. Không lỗi  

**Đáp án: A**

**Giải thích:** Đúng phải để `params int[] numbers` ở cuối danh sách tham số.

---

## Câu 48

```csharp
try
{
    int x = 10 / 0;
}
catch (Exception e)
{
}
catch (DivideByZeroException e)
{
}
```

Lỗi là gì?

A. `Exception` đặt trước làm `DivideByZeroException` phía sau không bao giờ tới được  
B. Không được có nhiều catch  
C. `DivideByZeroException` phải đặt trong finally  
D. Không lỗi  

**Đáp án: A**

**Giải thích:** Catch tổng quát phải đặt sau catch cụ thể.

---

## Câu 49

```csharp
class Student
{
    public int Age { get; private set; }
}

Student s = new Student();
s.Age = 20;
```

Lỗi là gì?

A. Setter của `Age` là private, bên ngoài class không gán được  
B. Getter của `Age` là private  
C. Property không được có private set  
D. Không lỗi  

**Đáp án: A**

**Giải thích:** Bên ngoài chỉ đọc được `Age`, không set được.

---

## Câu 50

```csharp
class User
{
    string name;

    public string name(string name)
    {
        return name;
    }
}
```

Vấn đề chính là gì?

A. Member trong cùng class không nên/trong thực tế không thể trùng tên gây xung đột; method cũng đặt tên không rõ hành động  
B. Method bắt buộc phải static  
C. Field bắt buộc phải public  
D. Không có vấn đề gì  

**Đáp án: A**

**Giải thích:** Field `name` và method `name` gây rối và có thể lỗi do trùng member. Nên đặt method dạng hành động như `SetName()` hoặc dùng property `Name`.

---

# Bảng đáp án nhanh

| Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án |
|---:|:---:|---:|:---:|---:|:---:|---:|:---:|---:|:---:|
| 1 | B | 2 | A | 3 | B | 4 | B | 5 | A |
| 6 | A | 7 | B | 8 | B | 9 | C | 10 | C |
| 11 | A | 12 | B | 13 | A | 14 | B | 15 | C |
| 16 | A | 17 | B | 18 | B | 19 | B | 20 | B |
| 21 | A | 22 | A | 23 | B | 24 | B | 25 | C |
| 26 | B | 27 | B | 28 | B | 29 | B | 30 | B |
| 31 | A | 32 | A | 33 | A | 34 | A | 35 | A |
| 36 | B | 37 | A | 38 | A | 39 | A | 40 | A |
| 41 | A | 42 | B | 43 | A | 44 | A | 45 | A |
| 46 | A | 47 | A | 48 | A | 49 | A | 50 | A |
