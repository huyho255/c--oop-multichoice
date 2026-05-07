(function () {
    const genericWrong = [
        'Đưa toàn bộ dữ liệu ra public field để thao tác cho nhanh',
        'Bỏ qua quy tắc của compiler vì chương trình vẫn có thể chạy',
        'Chuyển mọi thành phần sang static để khỏi cần tạo object',
        'Viết thêm code lặp lại ở nhiều nơi thay vì dùng đúng cơ chế của C#'
    ];

    const topicFacts = {
        'Constructor': [
            ['Bạn cần gán giá trị ban đầu cho các field khi tạo Product.', 'Viết constructor Product(...) trùng tên class và không khai báo kiểu trả về.', 'Viết public void Product(...) vì constructor cũng là một hàm bình thường.', 'Constructor không có kiểu trả về; có void thì nó trở thành method.'],
            ['Class Order có nhiều cách tạo: không tham số, theo mã đơn, theo mã đơn và tổng tiền.', 'Nạp chồng constructor bằng các danh sách tham số khác nhau.', 'Chỉ thay đổi kiểu trả về của constructor để phân biệt các cách tạo.', 'Constructor overloading dựa vào tham số, không dựa vào kiểu trả về.'],
            ['Ba constructor của Car đều phải gán petName và currSpeed.', 'Dùng this(...) để constructor đơn giản gọi constructor đầy đủ hơn.', 'Copy cùng đoạn gán field vào từng constructor.', 'this(...) giúp tránh lặp logic khởi tạo trong cùng class.'],
            ['Manager kế thừa Employee và Employee chỉ có constructor nhận name, id.', 'Trong constructor Manager, gọi base(name, id) trước khi gán phần riêng của Manager.', 'Đợi Manager tự kế thừa constructor Employee nên không cần viết gì.', 'Class con không kế thừa constructor của class cha.'],
            ['Bạn muốn class Singleton không cho code bên ngoài gọi new trực tiếp.', 'Dùng private constructor và cung cấp cách truy cập object được kiểm soát.', 'Dùng public constructor rồi nhắc người dùng đừng gọi new.', 'Private constructor chặn việc tạo object từ bên ngoài class.'],
            ['Bạn cần khởi tạo lãi suất dùng chung của SavingsAccount một lần.', 'Dùng static constructor không tham số để gán dữ liệu static.', 'Dùng constructor thường để gán static field cho từng object.', 'Static constructor chạy một lần cho class, phù hợp dữ liệu static.'],
            ['Một field readonly phải nhận giá trị khác nhau theo tham số tạo object.', 'Gán readonly field trong constructor instance.', 'Gán readonly field trong bất kỳ method nào sau khi object đã tạo.', 'Readonly field có thể gán lúc khai báo hoặc trong constructor.'],
            ['Class Student không khai báo constructor nào.', '.NET cung cấp default constructor không tham số và field nhận giá trị mặc định.', 'Không thể tạo Student bằng new nếu thiếu constructor tự viết.', 'Khi không có constructor tự khai báo, compiler tạo constructor mặc định.'],
            ['Class Student đã có public Student(string name).', 'Muốn new Student() thì phải tự viết thêm constructor không tham số.', 'Default constructor không tham số vẫn tự tồn tại song song.', 'Custom constructor làm default constructor tự động không còn.'],
            ['Bạn thấy public void Employee() trong class Employee.', 'Xem đây là method tên Employee, không phải constructor.', 'Xem đây là constructor hợp lệ vì tên trùng class.', 'Constructor không khai báo void hay kiểu trả về nào khác.']
        ],
        'Properties': [
            ['Employee cần ID luôn nằm trong khoảng 1000 đến 9999.', 'Đặt field private và kiểm tra value trong setter của property ID.', 'Cho empID là public để form tự gán trực tiếp.', 'Setter là nơi tốt để kiểm soát dữ liệu trước khi ghi vào field.'],
            ['Bên ngoài chỉ được đọc mã sinh viên sau khi object được tạo.', 'Khai báo public int ID { get; private set; }.', 'Khai báo public int ID; rồi dặn không sửa.', 'private set cho phép class tự ghi nhưng bên ngoài chỉ đọc.'],
            ['Bạn chưa cần logic kiểm tra cho Name nhưng muốn giữ khả năng đổi logic về sau.', 'Dùng automatic property public string Name { get; set; }.', 'Dùng public field vì sau này sửa cũng không ảnh hưởng gì.', 'Automatic property vẫn là property và có field ngầm phía sau.'],
            ['Một object cấu hình chỉ được gán Port lúc khởi tạo.', 'Dùng init để cho phép gán khi khởi tạo object.', 'Dùng set public vì init và set giống hệt nhau.', 'init giới hạn việc gán sau khi object đã khởi tạo xong.'],
            ['Setter của Age nhận giá trị người dùng nhập từ giao diện.', 'Dùng biến value để kiểm tra và gán nếu hợp lệ.', 'Tạo biến tên input bắt buộc vì value không tồn tại.', 'Trong set, value là giá trị đang được gán vào property.'],
            ['Bạn muốn đổi cách lưu Pay nhưng không muốn sửa code bên ngoài.', 'Giữ public property Pay làm điểm truy cập ổn định.', 'Để bên ngoài truy cập trực tiếp field pay.', 'Property giúp che giấu chi tiết lưu trữ bên trong class.'],
            ['Age không được âm.', 'Trong set, chỉ gán field nếu value >= 0.', 'Gán thẳng field vì kiểu int tự chặn số âm.', 'int vẫn nhận số âm; property cần kiểm tra nếu miền dữ liệu không cho phép.'],
            ['Bạn cần property chỉ ghi được từ constructor.', 'Dùng private set hoặc init tùy nhu cầu khởi tạo.', 'Dùng public set rồi không gọi lại sau.', 'C# hỗ trợ giới hạn quyền truy cập của accessor.'],
            ['Một class có private field balance và public property Balance.', 'Code bên ngoài nên đọc ghi qua Balance thay vì chạm trực tiếp balance.', 'Đổi balance thành public để property bớt dài.', 'Đóng gói yêu cầu dữ liệu đi qua API kiểm soát.'],
            ['Bạn cần log lỗi khi gán ID sai.', 'Đặt logic thông báo lỗi trong setter của ID.', 'Đặt logic trong getter vì getter chạy khi gán.', 'set chạy khi ghi; get chạy khi đọc.']
        ],
        'Static': [
            ['Mọi tài khoản cùng dùng một mức lãi suất hiện hành.', 'Đặt currInterestRate là static field của SavingsAccount.', 'Đặt currInterestRate là instance field để mỗi object tự sao chép.', 'Static field thuộc class và dùng chung cho mọi object.'],
            ['Mỗi tài khoản có số dư riêng.', 'Đặt currBalance là non-static field.', 'Đặt currBalance là static field để dễ truy cập.', 'Số dư là trạng thái riêng của từng object.'],
            ['Bạn cần in lãi suất mà không phụ thuộc tài khoản cụ thể.', 'Viết static method PrintInterestRate và gọi bằng SavingsAccount.PrintInterestRate().', 'Viết instance method rồi gọi bằng tên class.', 'Static method thuộc class, không cần object cụ thể.'],
            ['Static method cần tăng số dư cho một tài khoản được truyền vào.', 'Truyền SavingsAccount acc vào method rồi sửa acc.currBalance.', 'Truy cập thẳng currBalance trong static method.', 'Static method không có instance ngầm để biết currBalance của object nào.'],
            ['PrintStudent là method thường của Student.', 'Gọi qua object như s1.PrintStudent().', 'Gọi bằng Student.PrintStudent() dù method không static.', 'Non-static method cần object cụ thể.'],
            ['Class tiện ích MathHelper chỉ chứa hàm tính toán độc lập.', 'Có thể thiết kế static class với các static method.', 'Tạo static class rồi thêm instance field để lưu trạng thái riêng.', 'Static class không tạo object và chỉ chứa static member.'],
            ['Bạn đổi Student.schoolName từ HCMUS sang HUTECH.', 'Mọi object Student sẽ thấy schoolName mới.', 'Chỉ object đầu tiên được tạo thấy giá trị mới.', 'Static field dùng chung ở cấp class.'],
            ['Method thường AddBalanceInterest dùng currBalance và currInterestRate.', 'Method thường có thể truy cập cả member instance và static trong class.', 'Method thường chỉ được truy cập instance member.', 'Instance method chạy trên object nhưng vẫn thấy static member của class.'],
            ['Bạn cần khởi tạo dữ liệu static trước lần truy cập đầu tiên.', 'Dùng static constructor, không access modifier, không tham số.', 'Dùng public static constructor có tham số.', 'Static constructor có cú pháp riêng và chỉ chạy một lần.'],
            ['Bạn định override một static method ở class con.', 'Không xem static method là cơ chế polymorphism để override như instance virtual method.', 'Dùng override bình thường vì static method vẫn đa hình lúc chạy.', 'Static method không được override theo cách virtual/override của instance method.']
        ],
        'Phương thức': [
            ['Bạn cần tính tổng hai số và trả kết quả.', 'Viết method có kiểu trả về int và dùng return.', 'Viết void rồi vẫn mong nhận được kết quả ở nơi gọi.', 'Method trả dữ liệu phải có kiểu trả về phù hợp và return.'],
            ['Bạn cần in lời chào ra màn hình, không trả dữ liệu.', 'Dùng void cho method PrintHello.', 'Dùng int dù không trả về số nào.', 'void biểu thị method không trả về giá trị.'],
            ['Calculator cần Add cho int, float và ba tham số.', 'Dùng method overloading với danh sách tham số khác nhau.', 'Chỉ đổi kiểu trả về để compiler tự chọn.', 'Overloading phân biệt bằng tham số.'],
            ['Car có SpeedUp(int delta) là method thường.', 'Tạo object Car rồi gọi myCar.SpeedUp(5).', 'Gọi Car.SpeedUp(5) khi method không static.', 'Method thường thao tác trên object cụ thể.'],
            ['Bạn muốn method dùng được mà không tạo object.', 'Khai báo static method nếu logic không cần trạng thái object.', 'Giữ non-static nhưng gọi qua tên class.', 'Static method được gọi qua tên class.'],
            ['Một method cần nhận dữ liệu đầu vào để xử lý.', 'Khai báo tham số trong dấu ngoặc của method.', 'Đọc biến cục bộ của method khác trực tiếp.', 'Tham số là cách truyền dữ liệu vào method.'],
            ['Hai method Print(string) và Print(int) cùng nằm trong Printer.', 'Đây là overloading hợp lệ vì tham số khác kiểu.', 'Đây là overriding vì tên giống nhau.', 'Cùng class, cùng tên, khác tham số là overloading.'],
            ['Bạn gọi Add(1, 2, 3) khi có nhiều overload Add.', 'Compiler chọn overload dựa trên danh sách tham số phù hợp.', 'Runtime tự đoán theo giá trị kết quả mong muốn.', 'Overloading được quyết định chủ yếu ở thời điểm biên dịch.'],
            ['Một method có nhiều nhánh nhưng kiểu trả về là int.', 'Mọi đường đi hợp lệ cần trả về int.', 'Chỉ một nhánh có return là đủ trong mọi trường hợp.', 'Compiler kiểm tra đường đi trả về của method non-void.'],
            ['Bạn thấy hai method chỉ khác tên tham số: Add(int a, int b) và Add(int x, int y).', 'Không coi là overload khác biệt vì kiểu và số lượng tham số giống nhau.', 'Được overload vì tên tham số khác.', 'Signature overload không phân biệt bằng tên tham số thường.']
        ],
        'Class và object': [
            ['Bạn cần biểu diễn một chiếc xe có tên và tốc độ.', 'Tạo class Car với field/property petName, currSpeed và method phù hợp.', 'Dùng namespace để lưu trực tiếp petName và currSpeed.', 'Class mô tả kiểu object gồm dữ liệu và hành vi.'],
            ['Bạn muốn có một chiếc xe cụ thể để gọi SpeedUp.', 'Tạo object bằng new Car().', 'Chỉ khai báo class là đã có object cụ thể.', 'Class là khuôn mẫu; object là thể hiện được tạo ra.'],
            ['Field currSpeed đặt trong class Car.', 'currSpeed lưu trạng thái của object hoặc class tùy static hay non-static.', 'Field là một method bắt buộc trả về void.', 'Field là biến thành viên để lưu dữ liệu.'],
            ['Bạn cần che giấu field quan trọng khỏi bên ngoài.', 'Đặt field private và cung cấp property/method kiểm soát.', 'Đặt field public vì object cần dùng được.', 'Field thường nên được đóng gói.'],
            ['Một class có nhiều object cùng tồn tại.', 'Mỗi object có dữ liệu non-static riêng.', 'Mọi field của class tự động dùng chung.', 'Non-static field nằm theo từng object.'],
            ['Bạn đặt namespace cho nhóm class quản lý sinh viên.', 'Namespace giúp tổ chức và tránh trùng tên kiểu.', 'Namespace tự động tạo object cho từng class.', 'Namespace không thay thế class hay object.'],
            ['Bạn muốn gọi method của object từ class khác.', 'Dùng dấu chấm trên biến object, ví dụ myCar.PrintState().', 'Dùng dấu hai chấm như khai báo kế thừa.', 'Dấu chấm truy cập member của object.'],
            ['Một biến cục bộ nằm trong method Main.', 'Biến này không phải field của class.', 'Mọi biến trong class file đều là field.', 'Field được khai báo ở cấp class, không nằm bên trong method.'],
            ['Bạn cần nhiều sinh viên với tên khác nhau.', 'Tạo nhiều object Student, mỗi object giữ name riêng.', 'Chỉ tạo một static field name cho toàn bộ lớp Student.', 'Tên sinh viên là dữ liệu instance.'],
            ['Class chỉ có dữ liệu mà không có hành vi kiểm soát.', 'Cân nhắc thêm method/property để bảo vệ và thao tác dữ liệu.', 'Đổi mọi thứ thành public field là thiết kế OOP tốt nhất.', 'OOP kết hợp dữ liệu với hành vi và đóng gói.']
        ],
        'Kiểu dữ liệu': [
            ['Bạn lưu tuổi sinh viên.', 'Dùng int vì tuổi là số nguyên.', 'Dùng string cho mọi dữ liệu để khỏi ép kiểu.', 'Chọn kiểu dữ liệu đúng giúp tính toán và kiểm tra dễ hơn.'],
            ['Bạn lưu trạng thái đã nộp bài hay chưa.', 'Dùng bool với true/false.', 'Dùng int 0/1 trong mọi trường hợp.', 'bool biểu diễn giá trị logic rõ nghĩa.'],
            ['Bạn lưu một ký tự xếp loại A, B, C.', 'Dùng char cho một ký tự.', 'Dùng double vì char là số.', 'char biểu diễn một ký tự Unicode.'],
            ['Bạn gán short a vào int b.', 'Đây là chuyển đổi ngầm định ít nguy cơ mất dữ liệu.', 'Bắt buộc ép kiểu tường minh như từ int sang short.', 'Kiểu nhỏ sang kiểu lớn thường implicit được.'],
            ['Bạn gán int x vào short y.', 'Cần ép kiểu tường minh và chú ý nguy cơ mất dữ liệu.', 'Compiler luôn cho chuyển ngầm định.', 'Kiểu lớn sang kiểu nhỏ có thể tràn hoặc mất dữ liệu.'],
            ['Bạn muốn phát hiện lỗi khi ép 256 sang byte.', 'Dùng checked để bắt overflow.', 'Dùng unchecked để chắc chắn báo lỗi.', 'checked giúp ném exception khi tràn dữ liệu số.'],
            ['Bạn lưu tiền lương có phần thập phân.', 'Dùng double hoặc kiểu số thực phù hợp.', 'Dùng bool vì lương chỉ đúng hoặc sai.', 'Số thực dùng cho giá trị có phần thập phân.'],
            ['Bạn chưa gán giá trị cho string field.', 'Giá trị mặc định của reference type như string là null.', 'Giá trị mặc định của string luôn là chuỗi rỗng.', 'string là reference type nên mặc định null.'],
            ['Bạn lưu nhiều kiểu dữ liệu trong một biến tổng quát.', 'object có thể tham chiếu nhiều loại dữ liệu khác nhau.', 'int tự chứa được mọi object.', 'object là kiểu gốc chung trong C#.'],
            ['Bạn thấy int mặc định bằng 0, bool mặc định false.', 'Đó là giá trị mặc định của các value type phổ biến.', 'Mọi kiểu dữ liệu mặc định đều null.', 'Value type có default value cụ thể.']
        ],
        'Reference type': [
            ['Bạn gán Student s2 = s1 rồi đổi s2.Name.', 's1 và s2 có thể cùng tham chiếu một object nên thấy thay đổi chung.', 's2 luôn là bản sao độc lập hoàn toàn của s1.', 'Reference type lưu tham chiếu đến object.'],
            ['Bạn truyền int x vào method không dùng ref.', 'Method nhận bản sao giá trị nên không đổi x bên ngoài.', 'Mọi tham số int đều đổi trực tiếp biến gốc.', 'Value type truyền mặc định theo giá trị.'],
            ['Bạn muốn method Swap đổi hai biến int bên ngoài.', 'Dùng ref cho tham số cần thay đổi.', 'Chỉ đổi biến cục bộ trong method là đủ.', 'ref cho phép method thao tác trên biến gốc.'],
            ['Bạn truyền object Car vào method và đổi field Speed.', 'Object bên ngoài thấy Speed thay đổi vì cùng tham chiếu object.', 'Mọi thay đổi trong method đều mất khi method kết thúc.', 'Reference type cho phép sửa trạng thái object được tham chiếu.'],
            ['Bạn gán biến reference sang null.', 'Biến không trỏ đến object nào.', 'Object tự động biến thành số 0.', 'null biểu thị không có tham chiếu object.'],
            ['Bạn so sánh hai biến reference bằng cách nhìn dữ liệu bên trong.', 'Cần phân biệt so sánh tham chiếu và so sánh nội dung.', 'Reference type luôn so sánh theo mọi field tự động.', 'Hai biến có thể trỏ cùng object hoặc hai object giống dữ liệu.'],
            ['Bạn truyền string vào method và nối chuỗi trong method.', 'Cần nhớ string bất biến, gán lại tham số không đổi biến ngoài nếu không dùng ref.', 'string luôn bị sửa trực tiếp như mảng ký tự.', 'string là reference type nhưng immutable.'],
            ['Bạn tạo new Student() hai lần với dữ liệu giống nhau.', 'Đó là hai object khác nhau dù field giống nhau.', 'Chắc chắn là cùng một object vì dữ liệu giống.', 'new tạo object mới.'],
            ['Bạn cần tránh method làm đổi object gốc ngoài ý muốn.', 'Không sửa trực tiếp member của object hoặc tạo bản sao khi cần.', 'Reference type không bao giờ gây tác dụng phụ.', 'Sửa trạng thái qua tham chiếu có thể ảnh hưởng nơi gọi.'],
            ['Bạn dùng ref với biến chưa khởi tạo.', 'Biến truyền ref phải được gán trước khi truyền.', 'ref tự tạo giá trị mặc định cho biến.', 'ref yêu cầu biến gốc tồn tại và đã có giá trị hợp lệ.']
        ],
        'Using và Console': [
            ['Bạn muốn gọi Console.WriteLine ngắn gọn.', 'Thêm using System; ở đầu file.', 'Thêm using Console; vì Console là namespace.', 'Console nằm trong namespace System.'],
            ['Bạn không dùng using System.', 'Có thể gọi đầy đủ System.Console.WriteLine(...).', 'Không thể in ra màn hình bằng bất kỳ cách nào.', 'using chỉ giúp rút gọn tên namespace.'],
            ['Bạn cần đọc chuỗi người dùng nhập.', 'Dùng Console.ReadLine().', 'Dùng Console.WriteLine() vì WriteLine đọc dữ liệu.', 'ReadLine đọc một dòng từ console.'],
            ['Bạn muốn in biến name kèm lời chào.', 'Dùng nối chuỗi hoặc string interpolation trong Console.WriteLine.', 'Chỉ Console.WriteLine(name) mới hợp lệ.', 'Console.WriteLine hỗ trợ nhiều cách định dạng chuỗi.'],
            ['Bạn tổ chức hai class cùng tên ở hai nhóm khác nhau.', 'Đặt chúng trong namespace khác nhau.', 'Đổi tất cả class thành public field.', 'Namespace giúp tránh trùng tên kiểu.'],
            ['Bạn thấy using System.Collections.Generic.', 'Dòng này cần khi dùng List<T> trực tiếp.', 'Dòng này tạo sẵn tất cả object List.', 'using cho phép dùng tên kiểu trong namespace mà không viết đầy đủ.'],
            ['Bạn muốn chương trình console hiển thị kết quả tính toán.', 'Gọi Console.WriteLine(result).', 'Gọi namespace.WriteLine(result).', 'Console là class cung cấp thao tác nhập xuất console.'],
            ['Bạn viết class trong namespace School.App.', 'Code ngoài namespace có thể import bằng using School.App.', 'Namespace tự động kế thừa tất cả class trong đó.', 'using namespace giúp tham chiếu kiểu ngắn gọn hơn.'],
            ['Bạn cần in nhiều dòng hướng dẫn.', 'Gọi Console.WriteLine nhiều lần hoặc dùng ký tự xuống dòng.', 'Console chỉ in được đúng một dòng trong cả chương trình.', 'Console.WriteLine ghi dòng mới sau nội dung.'],
            ['Bạn gặp lỗi không nhận ra Console.', 'Kiểm tra using System; hoặc viết System.Console.', 'Đổi Console thành static constructor.', 'Lỗi thường do thiếu namespace System hoặc môi trường không tham chiếu đúng.']
        ],
        'Enum': [
            ['Bạn có các trạng thái Start, Playing, Paused, GameOver.', 'Dùng enum GameState để đặt tên trạng thái.', 'Dùng các số 0,1,2,3 rải rác trong code.', 'Enum giúp code rõ nghĩa và tránh magic number.'],
            ['Bạn lưu đúng 5 điểm kiểm tra.', 'Array int[] scores = new int[5] phù hợp khi số lượng cố định.', 'List bắt buộc trong mọi trường hợp có nhiều phần tử.', 'Array phù hợp khi biết trước kích thước.'],
            ['Bạn lưu danh sách tên sinh viên thay đổi liên tục.', 'Dùng List<string> và Add/Remove khi cần.', 'Dùng array cố định rồi bỏ qua phần tử thừa.', 'List<T> là danh sách động.'],
            ['Bạn truy cập phần tử đầu tiên của mảng.', 'Dùng index 0.', 'Dùng index 1 vì con người đếm từ 1.', 'Chỉ số mảng C# bắt đầu từ 0.'],
            ['Bạn duyệt toàn bộ mảng mà cần chỉ số.', 'Dùng vòng for với i từ 0 đến Length - 1.', 'Dùng Count cho array vì array không có Length.', 'Array dùng Length để biết số phần tử.'],
            ['Bạn duyệt List mà không cần chỉ số.', 'Dùng foreach để đọc từng phần tử.', 'Bắt buộc dùng while và tự tăng con trỏ.', 'foreach phù hợp khi chỉ cần đi qua từng item.'],
            ['Bạn cần mảng 3x3 có số cột bằng nhau.', 'Dùng mảng chữ nhật int[,] matrix.', 'Dùng jagged array vì mọi hàng luôn bằng nhau.', 'Mảng chữ nhật có kích thước hàng/cột đều.'],
            ['Bạn cần mỗi hàng có số phần tử khác nhau.', 'Dùng jagged array int[][].', 'Dùng int[,] vì từng hàng tự đổi độ dài.', 'Jagged array là mảng của các mảng.'],
            ['Bạn muốn biết số phần tử trong List.', 'Dùng Count.', 'Dùng Length như array.', 'List<T> dùng Count.'],
            ['Bạn dùng List<T> trong file mới.', 'Thêm using System.Collections.Generic; nếu muốn viết List<T> ngắn gọn.', 'Thêm using System.IO vì List nằm trong IO.', 'List<T> thuộc namespace System.Collections.Generic.']
        ],
        'Kế thừa': [
            ['MiniVan cần dùng lại Speed và Run của Car.', 'Khai báo class MiniVan : Car.', 'Copy toàn bộ code Car sang MiniVan.', 'Kế thừa giúp tái sử dụng member của class cha.'],
            ['Class con cần truy cập speed của class cha.', 'Đặt speed là protected nếu chỉ class cha/con dùng.', 'Đặt speed private rồi truy cập trực tiếp trong class con.', 'private không truy cập trực tiếp từ class con.'],
            ['Bên ngoài object vẫn không được sửa speed nhưng class con cần dùng.', 'Dùng protected cho speed.', 'Dùng public vì protected cũng mở cho bên ngoài.', 'protected mở cho class con, không mở cho code ngoài.'],
            ['Employee có constructor Employee(string name, int id).', 'Manager constructor gọi : base(name, id).', 'Manager tự động dùng constructor đó mà không cần base.', 'Class con phải gọi constructor cha phù hợp.'],
            ['Bạn tạo new MiniVan() kế thừa Car.', 'Constructor Car chạy trước constructor MiniVan.', 'MiniVan chạy xong rồi Car mới khởi tạo.', 'Base part phải khởi tạo trước derived part.'],
            ['Bạn muốn cấm kế thừa class SecurityToken.', 'Khai báo sealed class SecurityToken.', 'Khai báo public class vì public cấm kế thừa.', 'sealed ngăn class khác kế thừa.'],
            ['Bạn định class C : A, B trong C#.', 'Không hợp lệ vì class chỉ kế thừa trực tiếp một class.', 'Hợp lệ nếu A và B đều public.', 'C# hỗ trợ single inheritance cho class.'],
            ['Class con cần hành vi chung nhưng không muốn lộ private field.', 'Cung cấp protected method/property hoặc public API phù hợp.', 'Đổi private field thành public field.', 'Thiết kế kế thừa vẫn cần đóng gói.'],
            ['Bạn muốn mọi xe có Run nhưng xe tải có thêm LoadCargo.', 'Đặt Run ở base class Vehicle/Car và LoadCargo ở derived class.', 'Đặt mọi method riêng của mọi xe vào một class khổng lồ.', 'Class cha chứa phần chung; class con mở rộng phần riêng.'],
            ['Base class không có constructor không tham số.', 'Derived class phải chỉ rõ base(...) trong constructor.', 'Compiler tự đoán tham số bất kỳ cho base.', 'Nếu không có base() hợp lệ, phải gọi constructor cha có tham số.']
        ],
        'Đa hình': [
            ['Calculator có Add(int,int) và Add(float,float).', 'Đây là overloading vì cùng tên nhưng khác tham số.', 'Đây là overriding vì hai method ở cùng class.', 'Overloading xử lý nhiều dạng tham số.'],
            ['Shape có virtual Draw, Circle có override Draw.', 'Đây là overriding giữa class cha và class con.', 'Đây là overloading vì tên giống nhau.', 'Overriding viết lại hành vi kế thừa.'],
            ['Bạn gọi Shape s = new Circle(); s.Draw();', 'Nếu Draw virtual/override, method của Circle chạy.', 'Luôn chạy Draw của Shape vì biến có kiểu Shape.', 'Đa hình lúc chạy dựa vào object thật.'],
            ['Method cha không virtual.', 'Class con không thể override đúng nghĩa bằng override.', 'override luôn dùng được với mọi method public.', 'C# yêu cầu virtual/abstract/override phù hợp.'],
            ['Hai overload chỉ khác kiểu trả về.', 'Không hợp lệ vì tham số giống nhau.', 'Hợp lệ vì compiler nhìn kiểu biến nhận kết quả.', 'Overload không phân biệt chỉ bằng return type.'],
            ['Overriding yêu cầu signature thế nào?', 'Tên, tham số và kiểu trả về phải tương thích với method cha.', 'Phải đổi số lượng tham số để phân biệt.', 'Overriding giữ cùng hợp đồng method.'],
            ['Bạn muốn class con dùng lại method cha trong override.', 'Gọi base.MethodName() bên trong method override nếu cần.', 'Không thể gọi lại logic class cha.', 'base cho phép gọi triển khai của class cha.'],
            ['Bạn cần một danh sách Shape chứa Circle và Rectangle.', 'Dùng polymorphism để gọi Draw trên từng Shape.', 'Tạo hai danh sách riêng và cấm dùng base type.', 'Base type giúp xử lý các object con thống nhất.'],
            ['Overloading được chọn khi nào?', 'Compiler chọn dựa trên tham số lúc gọi.', 'Luôn chọn ở runtime theo object thật.', 'Overloading là đa hình thời biên dịch.'],
            ['Overriding được chọn khi nào?', 'Runtime dispatch chọn method theo object thật.', 'Compiler chỉ nhìn kiểu trả về để chọn.', 'Overriding là đa hình thời chạy.']
        ],
        'Phạm vi truy cập': [
            ['Field empID không được bên ngoài gán bừa.', 'Đặt empID private và mở property/method kiểm soát.', 'Đặt empID public để tiện truy cập.', 'private bảo vệ dữ liệu trong class.'],
            ['Class con cần dùng address của Person.', 'Đặt address protected.', 'Đặt address private rồi truy cập trực tiếp từ Student.', 'protected cho class con truy cập.'],
            ['Bất kỳ code nào cũng cần gọi Run của Car.', 'Khai báo Run public.', 'Khai báo Run private rồi gọi từ ngoài object.', 'public mở truy cập từ bên ngoài.'],
            ['Bạn muốn helper method chỉ dùng nội bộ class.', 'Đặt method private.', 'Đặt method public vì method nào cũng nên mở.', 'private giảm bề mặt API và tránh dùng sai.'],
            ['Bên ngoài object cố gắng s.address khi address protected.', 'Không hợp lệ vì protected không mở cho bên ngoài.', 'Hợp lệ vì object là Student kế thừa Person.', 'protected chỉ dùng trong class khai báo và class con.'],
            ['Bạn thiết kế dữ liệu lương nhân viên.', 'Ưu tiên private field và property kiểm soát.', 'Cho public double salary để mọi nơi sửa.', 'Access modifier hỗ trợ đóng gói dữ liệu nhạy cảm.'],
            ['Một member public trong class public.', 'Có thể được truy cập từ nơi nhìn thấy class.', 'Chỉ class khai báo truy cập được.', 'public là mức mở nhất trong nhóm này.'],
            ['Bạn cần class con đọc dữ liệu nhưng code ngoài không đọc trực tiếp.', 'Dùng protected hoặc protected property phù hợp.', 'Dùng public field vì class con cũng cần.', 'protected cân bằng giữa kế thừa và đóng gói.'],
            ['Bạn muốn kiểm soát ID qua SetID/GetID.', 'Giữ field private, public method xử lý kiểm tra.', 'Để field public rồi thêm SetID cho đẹp.', 'Nếu field public thì code ngoài có thể bỏ qua kiểm tra.'],
            ['Bạn phân vân giữa private và protected.', 'Dùng private nếu class con không cần truy cập trực tiếp.', 'Dùng protected cho mọi field để dễ sau này.', 'Mở quyền truy cập vừa đủ giúp code an toàn hơn.']
        ],
        'Dự đoán kết quả': [
            ['Code tạo Car() với constructor chaining this("Chuck", 10) rồi in petName và currSpeed.', 'Kết quả là Chuck 10.', 'Kết quả là null 0.', 'Constructor không tham số đã gọi constructor đầy đủ bằng this(...).'],
            ['Student.schoolName static đổi từ A sang B sau khi tạo hai object.', 'Cả hai object đều thấy schoolName là B.', 'Chỉ object tạo sau thấy B.', 'Static field dùng chung cho class.'],
            ['s1.name = "An"; s2.name = "Binh"; name là instance field.', 's1 in An, s2 in Binh.', 'Cả hai cùng in Binh.', 'Instance field riêng theo object.'],
            ['Car constructor in "Car", MiniVan constructor in "MiniVan".', 'Tạo MiniVan sẽ in Car rồi MiniVan.', 'Tạo MiniVan sẽ in MiniVan rồi Car.', 'Constructor cha chạy trước.'],
            ['Add(int,int) và Add(int,int,int), gọi Add(1,2,3).', 'Overload ba tham số được chọn.', 'Overload hai tham số được chọn rồi bỏ số 3.', 'Compiler chọn method khớp tham số.'],
            ['int x = 5; gọi method Increase(x) không ref và trong method x++.', 'Biến x bên ngoài vẫn là 5.', 'Biến x bên ngoài thành 6.', 'Value type truyền mặc định theo giá trị.'],
            ['int x = 5; gọi Increase(ref x) và trong method x++.', 'Biến x bên ngoài thành 6.', 'Biến x bên ngoài vẫn là 5.', 'ref cho phép đổi biến gốc.'],
            ['List<int> có Add(10), Add(20), Remove(10).', 'Count còn 1.', 'Count vẫn là 2.', 'List thay đổi kích thước khi thêm/xóa.'],
            ['int[] arr = { 4, 8, 15 }; đọc arr[0].', 'Giá trị là 4.', 'Giá trị là 8.', 'Array bắt đầu từ index 0.'],
            ['Shape s = new Circle(); Circle override Draw.', 's.Draw() chạy Draw của Circle.', 's.Draw() luôn chạy Draw của Shape.', 'Virtual dispatch dùng object thật lúc chạy.']
        ],
        'Phát hiện lỗi': [
            ['public void Car() trong class Car được kỳ vọng là constructor.', 'Sai vì constructor không có void.', 'Sai vì class không được có method trùng tên.', 'Có void thì đây là method thường, không phải constructor.'],
            ['static method truy cập trực tiếp currBalance instance field.', 'Sai vì static method không có object cụ thể.', 'Sai vì double không được dùng trong static method.', 'Static chỉ truy cập trực tiếp static member.'],
            ['int Add(int,int) và float Add(int,int) cùng class.', 'Sai vì chỉ khác kiểu trả về.', 'Sai vì int và float không được cùng xuất hiện.', 'Overload cần khác tham số.'],
            ['class C : A, B trong C#.', 'Sai vì class chỉ kế thừa trực tiếp một class.', 'Sai vì tên class chỉ được một ký tự.', 'C# không hỗ trợ multiple inheritance cho class.'],
            ['class Manager : Employee nhưng Employee chỉ có Employee(string name), Manager không gọi base.', 'Sai vì thiếu lời gọi constructor cha phù hợp.', 'Sai vì class con không được có constructor.', 'Derived constructor phải gọi base constructor hợp lệ.'],
            ['MiniVan truy cập trực tiếp private int speed của Car.', 'Sai vì private chỉ dùng trong chính class Car.', 'Sai vì int không kế thừa được.', 'Class con không truy cập trực tiếp private member.'],
            ['Bên ngoài object gán emp.ID khi ID có private set.', 'Sai vì setter không public.', 'Sai vì getter private.', 'private set chặn ghi từ bên ngoài class.'],
            ['Dùng List<int> nhưng thiếu using System.Collections.Generic và không viết tên đầy đủ.', 'Sai vì compiler không biết List<T>.', 'Sai vì List chỉ dùng được với string.', 'List<T> nằm trong System.Collections.Generic.'],
            ['Truy cập arr[3] với mảng có 3 phần tử.', 'Sai lúc chạy vì index hợp lệ là 0..2.', 'Sai vì mảng bắt đầu từ 1.', 'Array C# bắt đầu từ 0 và không vượt Length - 1.'],
            ['override method khi method cha không virtual/abstract/override.', 'Sai vì override cần method cha cho phép ghi đè.', 'Sai vì override chỉ dùng cho static method.', 'C# kiểm tra quy tắc virtual/override.']
        ]
    };

    function rotateOptions(correct, wrongs, index) {
        const options = [correct, ...wrongs.slice(0, 3)];
        const shift = index % options.length;
        return options.slice(shift).concat(options.slice(0, shift));
    }

    function makeQuestions() {
        const questions = [];
        Object.entries(topicFacts).forEach(([topic, facts]) => {
            facts.forEach(([scenario, action, trap, explanation], i) => {
                questions.push({
                    topic,
                    text: `${scenario} Lựa chọn nào phù hợp nhất?`,
                    correct: action,
                    wrongs: [trap, genericWrong[i % genericWrong.length], genericWrong[(i + 1) % genericWrong.length]],
                    explanation
                });
                questions.push({
                    topic,
                    text: `${scenario} Cách hiểu nào dễ gây lỗi nhất?`,
                    correct: trap,
                    wrongs: [action, 'Giữ thiết kế theo nguyên tắc đóng gói và đúng trách nhiệm', 'Dựa vào quy tắc ngôn ngữ thay vì đoán theo thói quen'],
                    explanation
                });
            });
        });
        return questions;
    }

    function renderQuestion(question, index) {
        const options = rotateOptions(question.correct, question.wrongs, index);
        const optionLines = options.map(option => `- [${option === question.correct ? 'x' : ' '}] ${option}`).join('\n');
        return `## Câu ${index + 1}
Chủ đề: ${question.topic}
${question.text}

${optionLines}

> Giải thích: ${question.explanation}`;
    }

    window.topicQuestionBankData = `# Trắc nghiệm theo chủ đề - câu hỏi mở rộng từ tài liệu ktlt.docx

${makeQuestions().map(renderQuestion).join('\n\n')}`;
})();
