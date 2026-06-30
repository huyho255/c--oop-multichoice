# 50 câu trắc nghiệm C# - Chủ đề `Đa hình / Polymorphism`

## Phạm vi bao phủ

Bộ câu hỏi này bao phủ các ý chính:

- Đa hình là gì
- Runtime polymorphism
- Compile-time polymorphism
- `virtual`, `override`
- `abstract` method/class
- `base.Method()`
- Overloading và overriding
- Method hiding bằng `new`
- Biến kiểu cha trỏ tới object kiểu con
- Mảng/list kiểu cha chứa nhiều object kiểu con
- Interface và đa hình
- `is`, `as`, ép kiểu
- Property đa hình
- Static method và đa hình
- Bẫy hay gặp khi thi và khi code

---

## Câu hỏi

### Câu 1
Đa hình trong OOP nghĩa là gì?

A. Một class chỉ có một method duy nhất  
B. Cùng một lời gọi method nhưng object khác nhau có thể chạy hành vi khác nhau  
C. Một object không có trạng thái  
D. Một class không được kế thừa  

### Câu 2
Ví dụ nào thể hiện ý tưởng đa hình rõ nhất?

A. `int x = 10;`  
B. `Animal a = new Dog(); a.Speak();`  
C. `string s = "Hello";`  
D. `Console.WriteLine(123);`  

### Câu 3
Trong đa hình runtime, C# chọn method dựa vào yếu tố nào?

A. Kiểu khai báo của biến בלבד  
B. Object thật sự đang nằm bên trong biến  
C. Tên file `.cs`  
D. Tên namespace  

### Câu 4
Cho code:

```csharp
Animal a = new Dog();
a.Speak();
```

Nếu `Speak()` là `virtual/override`, method nào được gọi?

A. Luôn gọi `Animal.Speak()`  
B. Gọi `Dog.Speak()` nếu object thật là `Dog`  
C. Không method nào được gọi  
D. Gọi cả hai method cùng lúc bắt buộc  

### Câu 5
Từ khóa nào dùng ở class cha để cho phép class con ghi đè method?

A. `new`  
B. `virtual`  
C. `static`  
D. `private`  

### Câu 6
Từ khóa nào dùng ở class con để ghi đè method `virtual` của class cha?

A. `override`  
B. `static`  
C. `const`  
D. `namespace`  

### Câu 7
Code nào đúng về `virtual/override`?

A.
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

B.
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

C.
```csharp
class Animal
{
    public static void Speak() { }
}

class Dog : Animal
{
    public override void Speak() { }
}
```

D.
```csharp
class Animal
{
    public private void Speak() { }
}
```

### Câu 8
Nếu class cha không khai báo method là `virtual`, class con có `override` được không?

A. Có  
B. Không  
C. Có, nếu method là public  
D. Có, nếu method trả về `void`  

### Câu 9
`override` nghĩa là gì?

A. Class con viết lại implementation của method được kế thừa từ class cha  
B. Class con tạo field mới  
C. Class con xóa class cha  
D. Class con đổi namespace  

### Câu 10
`virtual` method có thân hàm không?

A. Có thể có thân hàm  
B. Không bao giờ có thân hàm  
C. Chỉ có dấu `;`  
D. Chỉ có comment  

### Câu 11
Class con có bắt buộc override method `virtual` không?

A. Có, luôn bắt buộc  
B. Không, override là tùy chọn  
C. Chỉ bắt buộc nếu class con public  
D. Chỉ bắt buộc nếu method trả về int  

### Câu 12
`abstract` method có thân hàm không?

A. Có  
B. Không  
C. Có, nếu có comment bên trong  
D. Có, nếu method public  

### Câu 13
Code nào đúng về abstract method?

A.
```csharp
public abstract void Speak();
```

B.
```csharp
public abstract void Speak()
{
}
```

C.
```csharp
public abstract void Speak()
{
    // comment
}
```

D.
```csharp
public void abstract Speak();
```

### Câu 14
Class có abstract method thì class đó phải là gì?

A. `static`  
B. `abstract`  
C. `sealed`  
D. `private`  

### Câu 15
Class con kế thừa abstract class có abstract method thì thường phải làm gì?

A. Bắt buộc override abstract method, trừ khi class con cũng abstract  
B. Không cần làm gì  
C. Xóa method ở class cha  
D. Biến method thành field  

### Câu 16
Khác biệt chính giữa `virtual` và `abstract` là gì?

A. `virtual` có thể có thân hàm, `abstract` không có thân hàm  
B. `abstract` luôn static, `virtual` không static  
C. `virtual` chỉ dùng cho field  
D. `abstract` chỉ dùng trong struct  

### Câu 17
Cho code:

```csharp
abstract class Animal
{
    public abstract void Speak();
}
```

Dòng nào đúng?

A. `Animal a = new Animal();`  
B. Không thể tạo object trực tiếp từ `Animal`  
C. `Speak()` đã có thân hàm đầy đủ  
D. `Animal` bắt buộc là static class  

### Câu 18
Lợi ích chính của đa hình là gì?

A. Giảm if/else kiểm tra từng kiểu object, code dễ mở rộng hơn  
B. Làm mọi method thành private  
C. Không cần class nữa  
D. Chỉ để tăng tốc độ in chuỗi  

### Câu 19
Không có đa hình, code thường phải viết kiểu nào?

A. Gọi chung `animal.Speak()`  
B. Nhiều `if (animal is Dog)`, `if (animal is Cat)`  
C. Không cần kiểm tra gì  
D. Không cần object  

### Câu 20
Có đa hình tốt, ta thường viết:

A. `animal.Speak();`  
B. `if (animal is Dog) d.Bark();` bắt buộc mọi nơi  
C. `Dog.Bark(animal);`  
D. `animal = null;`  

### Câu 21
Cho code:

```csharp
Animal[] animals =
{
    new Dog(),
    new Cat()
};

foreach (Animal a in animals)
{
    a.Speak();
}
```

Điều gì xảy ra nếu `Speak()` là `virtual/override`?

A. Mỗi object chạy đúng `Speak()` của class thật của nó  
B. Tất cả luôn chạy `Animal.Speak()`  
C. Chương trình không biên dịch vì mảng không chứa được class con  
D. Chỉ phần tử đầu tiên chạy  

### Câu 22
Mảng `Animal[]` có thể chứa `Dog` và `Cat` khi nào?

A. Khi `Dog` và `Cat` kế thừa từ `Animal`  
B. Khi `Dog` và `Cat` là kiểu int  
C. Khi `Animal` là struct bắt buộc  
D. Không bao giờ được  

### Câu 23
`base.Draw()` trong class con nghĩa là gì?

A. Gọi method `Draw()` của class cha  
B. Gọi constructor của class hiện tại  
C. Tạo object mới  
D. Xóa method con  

### Câu 24
Cho code:

```csharp
class Rectangle : Shape
{
    public override void Draw()
    {
        Console.WriteLine("Rectangle");
        base.Draw();
    }
}
```

Nếu gọi `Draw()`, thứ tự chạy là gì?

A. Chạy code trong `Rectangle.Draw()` rồi gọi thêm `Shape.Draw()`  
B. Chỉ chạy `Shape.Draw()`  
C. Không chạy gì  
D. Chỉ chạy constructor  

### Câu 25
Overloading là gì?

A. Cùng tên method nhưng khác danh sách tham số  
B. Class con viết lại method class cha  
C. Class con che method class cha bằng `new`  
D. Interface không có method  

### Câu 26
Overloading thuộc dạng đa hình nào?

A. Compile-time polymorphism  
B. Runtime polymorphism  
C. Không liên quan đến method  
D. Chỉ dùng cho abstract class  

### Câu 27
Overriding thuộc dạng đa hình nào?

A. Runtime polymorphism  
B. Compile-time constant  
C. Namespace polymorphism  
D. Field hiding  

### Câu 28
Code nào là overloading?

A.
```csharp
void Print(int x) { }
void Print(string s) { }
```

B.
```csharp
class Dog : Animal
{
    public override void Speak() { }
}
```

C.
```csharp
Animal a = new Dog();
```

D.
```csharp
base.Speak();
```

### Câu 29
Code nào là overriding?

A.
```csharp
void Add(int x) { }
void Add(string x) { }
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
int x = 5;
```

D.
```csharp
string s = "abc";
```

### Câu 30
Khác kiểu trả về có đủ để overload method không?

A. Có  
B. Không  
C. Chỉ đủ với static method  
D. Chỉ đủ trong abstract class  

### Câu 31
Method hiding bằng `new` là gì?

A. Class con che method class cha, nhưng không tạo đa hình runtime thật  
B. Class con override method virtual  
C. Class con xóa method cha  
D. Class con tạo constructor mới  

### Câu 32
Code nào là method hiding?

A.
```csharp
class Animal
{
    public void Speak() { }
}

class Dog : Animal
{
    public new void Speak() { }
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
abstract class Animal
{
    public abstract void Speak();
}
```

D.
```csharp
interface IAnimal
{
    void Speak();
}
```

### Câu 33
Cho code:

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

A. `Dog`  
B. `Animal`  
C. Lỗi runtime  
D. In cả `Animal` và `Dog`  

### Câu 34
Cho code:

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
C. Lỗi vì biến kiểu Animal  
D. Không in gì  

### Câu 35
Vì sao ở câu 34 in ra `Dog`?

A. Vì `Speak()` là `virtual/override`, C# gọi theo object thật lúc runtime  
B. Vì `Animal` bị xóa  
C. Vì `Dog` là static class  
D. Vì `Console.WriteLine` tự đoán kiểu  

### Câu 36
Trong C#, biến kiểu cha trỏ tới object kiểu con có thể gọi method nào?

A. Chỉ các method được khai báo trong kiểu cha, trừ khi ép kiểu xuống  
B. Mọi method riêng của class con tự do  
C. Chỉ constructor của class con  
D. Không gọi được method nào  

### Câu 37
Cho code:

```csharp
Animal a = new Dog();
a.Bite();
```

Nếu `Bite()` chỉ có trong `Dog`, code sẽ thế nào?

A. Chạy bình thường  
B. Lỗi compile vì biến `a` có kiểu khai báo là `Animal`  
C. Chỉ lỗi khi chạy  
D. Tự động ép kiểu sang Dog  

### Câu 38
Muốn gọi `Bite()` an toàn khi `Animal a = new Dog();`, cách nào tốt?

A.
```csharp
if (a is Dog d)
{
    d.Bite();
}
```

B.
```csharp
a.Bite();
```

C.
```csharp
Animal.Bite();
```

D.
```csharp
new Bite();
```

### Câu 39
Từ khóa `is` dùng để làm gì?

A. Kiểm tra object có thuộc kiểu nào đó không  
B. Ép kiểu sai thì trả null  
C. Gọi method class cha  
D. Override method  

### Câu 40
Từ khóa `as` dùng để làm gì?

A. Ép kiểu an toàn, nếu thất bại thì trả về `null`  
B. Bắt buộc override method  
C. Tạo abstract class  
D. Gọi constructor cha  

### Câu 41
Cho code:

```csharp
Animal a = new Cat();
Dog d = a as Dog;
```

Nếu `a` thật sự là `Cat`, `d` sẽ là gì?

A. Object Dog mới  
B. `null`  
C. Object Cat  
D. Lỗi compile bắt buộc  

### Câu 42
Đa hình với interface nghĩa là gì?

A. Nhiều class khác nhau cùng implement interface và được xử lý qua kiểu interface  
B. Interface tạo object trực tiếp  
C. Interface chỉ chứa field  
D. Interface chỉ dùng cho static method  

### Câu 43
Code nào thể hiện đa hình với interface?

A.
```csharp
IAnimal a = new Dog();
a.Speak();
```

B.
```csharp
int a = 5;
```

C.
```csharp
Dog.Speak();
```

D.
```csharp
new IAnimal();
```

### Câu 44
Có thể tạo object trực tiếp từ interface không?

A. Có  
B. Không  
C. Có, nếu interface public  
D. Có, nếu interface có một method  

### Câu 45
Property có thể tham gia đa hình không?

A. Có, property có thể `virtual/override`  
B. Không, chỉ method mới được  
C. Chỉ field mới được  
D. Chỉ constructor mới được  

### Câu 46
Code nào đúng về property đa hình?

A.
```csharp
class Employee
{
    public virtual decimal Salary { get { return 1000; } }
}

class Manager : Employee
{
    public override decimal Salary { get { return 3000; } }
}
```

B.
```csharp
class Employee
{
    public decimal Salary;
}

class Manager : Employee
{
    public override decimal Salary;
}
```

C.
```csharp
class Employee
{
    public static virtual decimal Salary { get; set; }
}
```

D.
```csharp
class Employee
{
    public abstract decimal Salary = 1000;
}
```

### Câu 47
Static method có override theo đa hình runtime được không?

A. Có  
B. Không  
C. Có, nếu thêm `virtual`  
D. Có, nếu class là abstract  

### Câu 48
Method `private` ở class cha có override được không?

A. Có  
B. Không, vì class con không truy cập/ghi đè trực tiếp được private method  
C. Có, nếu dùng `base`  
D. Có, nếu method trả về `void`  

### Câu 49
Nếu muốn class con không cho override tiếp một method đã override, có thể dùng gì?

A. `sealed override`  
B. `static override`  
C. `private virtual`  
D. `new abstract`  

### Câu 50
Chốt đúng nhất về đa hình trong C# là gì?

A. Đa hình là chỉ dùng method static  
B. Đa hình giúp dùng kiểu cha/interface để gọi hành vi chung, còn object con tự quyết định cách thực hiện  
C. Đa hình làm class con không cần kế thừa  
D. Đa hình chỉ là đặt nhiều biến cùng tên  

---

## Đáp án nhanh

| Câu | Đáp án |
|---:|:---:|
| 1 | B |
| 2 | B |
| 3 | B |
| 4 | B |
| 5 | B |
| 6 | A |
| 7 | A |
| 8 | B |
| 9 | A |
| 10 | A |
| 11 | B |
| 12 | B |
| 13 | A |
| 14 | B |
| 15 | A |
| 16 | A |
| 17 | B |
| 18 | A |
| 19 | B |
| 20 | A |
| 21 | A |
| 22 | A |
| 23 | A |
| 24 | A |
| 25 | A |
| 26 | A |
| 27 | A |
| 28 | A |
| 29 | B |
| 30 | B |
| 31 | A |
| 32 | A |
| 33 | B |
| 34 | B |
| 35 | A |
| 36 | A |
| 37 | B |
| 38 | A |
| 39 | A |
| 40 | A |
| 41 | B |
| 42 | A |
| 43 | A |
| 44 | B |
| 45 | A |
| 46 | A |
| 47 | B |
| 48 | B |
| 49 | A |
| 50 | B |

---

## Giải thích siêu ngắn

| Câu | Ý chính cần nhớ |
|---:|---|
| 1 | Đa hình là một lời gọi, nhiều hành vi tùy object thật. |
| 2 | `Animal a = new Dog(); a.Speak();` là ví dụ kinh điển. |
| 3 | Runtime polymorphism chọn method theo object thật. |
| 4 | Object thật là `Dog` thì gọi `Dog.Speak()`. |
| 5 | Class cha dùng `virtual` để cho phép ghi đè. |
| 6 | Class con dùng `override` để ghi đè. |
| 7 | `virtual` ở cha, `override` ở con là đúng. |
| 8 | Không có `virtual/abstract/override` ở cha thì không override được. |
| 9 | `override` là class con viết lại method cha. |
| 10 | `virtual` method có thể có thân hàm mặc định. |
| 11 | Class con không bắt buộc override `virtual`. |
| 12 | `abstract` method không có thân hàm. |
| 13 | Abstract method kết thúc bằng `;`. |
| 14 | Có abstract method thì class phải abstract. |
| 15 | Class con phải override hoặc cũng abstract. |
| 16 | `virtual` có thân hàm, `abstract` không có thân hàm. |
| 17 | Không tạo object trực tiếp từ abstract class. |
| 18 | Đa hình giúp giảm if/else theo từng kiểu. |
| 19 | Không đa hình thường phải kiểm tra kiểu thủ công. |
| 20 | Có đa hình thì gọi chung `animal.Speak()`. |
| 21 | Mỗi object trong mảng chạy đúng method của nó. |
| 22 | Class con có thể đặt trong biến/mảng kiểu cha. |
| 23 | `base.Draw()` gọi method class cha. |
| 24 | Code class con chạy trước, sau đó gọi `base.Draw()`. |
| 25 | Overloading là cùng tên khác tham số. |
| 26 | Overloading là compile-time polymorphism. |
| 27 | Overriding là runtime polymorphism. |
| 28 | Hai `Print` khác tham số là overloading. |
| 29 | `override` method cha là overriding. |
| 30 | Chỉ khác kiểu trả về không đủ overload. |
| 31 | `new` che method, không phải đa hình thật. |
| 32 | `public new void Speak()` là method hiding. |
| 33 | Với `new`, biến kiểu `Animal` gọi `Animal.Speak()`. |
| 34 | Với `override`, biến kiểu `Animal` vẫn gọi `Dog.Speak()`. |
| 35 | `virtual/override` làm C# dispatch theo object thật. |
| 36 | Compiler nhìn theo kiểu khai báo của biến. |
| 37 | `Bite()` không có trong `Animal`, nên lỗi compile. |
| 38 | Dùng pattern matching `is Dog d` để ép kiểu an toàn. |
| 39 | `is` kiểm tra kiểu object. |
| 40 | `as` ép kiểu, sai thì trả `null`. |
| 41 | `Cat` ép sang `Dog` bằng `as` thất bại nên ra `null`. |
| 42 | Interface cho nhiều class được xử lý qua một kiểu chung. |
| 43 | `IAnimal a = new Dog();` là đa hình qua interface. |
| 44 | Interface không tạo object trực tiếp được. |
| 45 | Property cũng có thể `virtual/override`. |
| 46 | `Salary` virtual/override là property đa hình. |
| 47 | Static method không có đa hình runtime kiểu override. |
| 48 | Private method không override trực tiếp được. |
| 49 | `sealed override` chặn class sau override tiếp. |
| 50 | Dùng kiểu cha/interface, object con tự chạy hành vi riêng. |

---

## Bảng chốt nhanh

| Khái niệm | Ý nghĩa |
|---|---|
| Polymorphism | Một lời gọi, nhiều hành vi tùy object thật |
| Runtime polymorphism | Đa hình lúc chạy, thường dùng `virtual/override` |
| Compile-time polymorphism | Đa hình lúc biên dịch, thường là overloading |
| `virtual` | Method/property cha cho phép class con override |
| `override` | Class con ghi đè method/property cha |
| `abstract` | Chỉ khai báo, không có thân hàm, class con phải triển khai |
| `base.Method()` | Gọi method của class cha |
| Overloading | Cùng tên, khác tham số |
| Overriding | Class con viết lại method virtual/abstract của class cha |
| `new` hiding | Che method cha, không phải đa hình runtime thật |
| `is` | Kiểm tra kiểu object |
| `as` | Ép kiểu an toàn, sai thì trả `null` |
| Interface polymorphism | Nhiều class implement cùng interface và được gọi qua interface |

## Mẹo nhớ

```csharp
virtual + override = đa hình thật

Animal a = new Dog();
a.Speak(); // nếu Speak override -> chạy Dog.Speak()
```

So sánh `new` và `override`:

```csharp
// Hiding bằng new
Animal a = new Dog();
a.Speak(); // có thể chạy Animal.Speak()

// Override thật
Animal a = new Dog();
a.Speak(); // chạy Dog.Speak()
```

Ví dụ chuẩn:

```csharp
using System;

class Animal
{
    public virtual void Speak()
    {
        Console.WriteLine("Animal makes a sound");
    }
}

class Dog : Animal
{
    public override void Speak()
    {
        Console.WriteLine("Dog barks");
    }
}

class Cat : Animal
{
    public override void Speak()
    {
        Console.WriteLine("Cat meows");
    }
}

class Program
{
    static void Main()
    {
        Animal[] animals =
        {
            new Dog(),
            new Cat()
        };

        foreach (Animal a in animals)
        {
            a.Speak();
        }
    }
}
```

Kết quả:

```text
Dog barks
Cat meows
```
