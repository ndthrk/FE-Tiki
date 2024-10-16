import filterimg from '../../assets/filter.png'
import sort_img from '../../assets/sort.png'
import greaterthan from '../../assets/greater-than.png';

const NavBar = () => {
    return (
    <div className='row'>
        <div className="text-black d-sm-block d-none">
            <a href="#" className="text-decoration-none text-secondary">Trang chủ </a>
            <img src={greaterthan} width="10" height="10"/>
            <a href="#" className="text-decoration-none text-dark"> Nhà sách Tiki</a>
        </div>
        <div className='bg-white d-sm-none d-block'>
            <div className="d-flex p-2 mb-0 justify-content-between align-items-center text-center fw-bold">
                <div className="col-3 text-primary">Phổ biến</div>
                <div className="col-3">Bán chạy</div>
                <div className="col-3">Hàng mới</div>
                <div className="col-3">
                    Giá
                    <span><img src={sort_img} width="20" height="20"/></span>
                </div>
                
            </div>
            
            <hr className='mt-1 mb-2'/>
            
            <div className='filter d-flex gap-3 ms-2 p-1 justify-content-start align-items-center'>
                <img src={filterimg} width="20" height="25"/>
                <span>Lọc</span>
                <img src='https://salt.tikicdn.com/ts/tka/a8/31/b6/802e2c99dcce64c67aa2648edb15dd25.png'
                    width="40" height="20"/>
            </div>
        </div>
    </div>
    
    )
}
export default NavBar