
import fbimg from '../../assets/fb.png';
import utubeimg from '../../assets/utube.png';
import zaloimg from '../../assets/zalo.png';
import './style.css'
const Footer = () =>{
    return(
        <div className="d-sm-block d-none bg-white small">
            <div className="container mt-4">
                <div className="row justify-content-between">
                <div className="col support">
                    <h5>Hỗ trợ khách hàng</h5>
                    <ul className="list-unstyled text-secondary">
                        <li><a href="#">
                            Hotline: <span className="text-dark">1900-6035</span> 
                            <br/>
                            (1000 đ/phút, 8-21h kể cả T7, CN)
                        </a></li>
                        <li><a href="#">Các câu hỏi thường gặp</a></li>
                        <li><a href="#">Gửi yêu cầu hỗ trợ</a></li>
                        <li><a href="#">Hướng dẫn đặt hàng</a></li>
                        <li><a href="#">Phương thức vận chuyển</a></li>
                        <li><a href="#">Chính sách đổi trả</a></li>
                        <li><a href="#">Hướng dẫn trả góp</a></li>
                        <li><a href="#">Chính sách hàng nhập khẩu</a></li>
                        <li><a href="#">Hỗ trợ khách hàng: hotro@tiki.vn</a></li>
                        <li><a href="#">Báo lỗi bảo mật: security@tiki.vn</a></li>
                    </ul>
                </div>

                <div className="col about">
                    <h5>Về Tiki</h5>
                    <ul className="list-unstyled text-secondary">
                        <li><a href="#">Giới thiệu Tiki</a></li>
                        <li><a href="#">Tiki Blog</a></li>
                        <li><a href="#">Tuyển dụng</a></li>
                        <li><a href="#">Chính sách bảo mật thanh toán</a></li>
                        <li><a href="#">Chính sách bảo mật thông tin cá nhân</a></li>
                        <li><a href="#">Chính sách giải quyết khiếu nại</a></li>
                        <li><a href="#">Điều khoản sử dụng</a></li>
                        <li><a href="#">Giới thiệu Tiki Xu</a></li>
                        <li><a href="#">Gói hội viên VIP</a></li>
                        <li><a href="#">Tiếp thị liên kết cùng Tiki</a></li>
                        <li><a href="#">Bán hàng doanh nghiệp</a></li>
                        <li><a href="#">Điều kiện vận chuyển</a></li>
                    </ul>
                </div>

                <div className="col collaboration">
                    <h5>Hợp tác và liên kết</h5>
                    <ul className="list-unstyled text-secondary">
                        <li><a href="#">Quy chế hoạt động Sàn GDTMĐT</a></li>
                        <li><a href="#">Bán hàng cùng Tiki</a></li>
                    </ul>
                    <h5>Chứng nhận bởi</h5>
                    <a href="#" className="center">
                        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg"
                        width="83" height="32"/>
                    </a>
                </div>

                <div className="col payments">
                    <h5>Phương thức thanh toán</h5>
                    <br/>
                    <h5>Dịch vụ giao hàng</h5>
                </div>

                <div className="col contact">
                    <h5>Kết nối với chúng tôi</h5>
                    <div className="d-flex flex-wrap gap-2">
                        <a href="#">
                            <img src={fbimg} alt="fb"/>
                        </a>
                        <a href='#'>
                            <img src={utubeimg} alt="youtube"/>
                        </a>
                        <a href='#'>
                            <img src={zaloimg} alt="zalo"/>
                        </a> 
                    </div>
                    <h5>Tải ứng dụng trên điện thoại</h5>
                </div>
                </div>
                <hr/>
                <div className="row">
                    <div className='col'>
                        <h5>Công ty TNHH TIKI</h5>
                        <ul className="list-unstyled text-secondary">
                            <li>Tòa nhà số 52 đường Út Tịch, Phường 4, Quận Tân Bình, Thành phố Hồ Chí Minh</li>
                            <li>Giấy chứng nhận đăng ký doanh nghiệp số 0309532909 do Sở Kế Hoạch và Đầu Tư Thành phố Hồ Chí Minh cấp lần đầu vào ngày 06/01/2010.</li>
                            <li>Hotline: <a href="#" className="text-decoration-none">1900 6035</a></li>
                        </ul>
                    </div>
                </div>
                <hr/>
            </div>
        </div>
    )
}
export default Footer;