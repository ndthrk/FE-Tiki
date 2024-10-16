
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import greaterImg from '../../assets/greater-than.png'
import './style.css'
const ImageShow = ({images}) => {
    return(
        <div className='rounded bg-white'>
            <div className='card-img-top p-3'>
                <div className='img-show'>
                    <ImageGallery items={images}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        showNav={false}
                    />
                </div>
                <div className='card-body'>
                    <div className='card-title'></div><h6 className='mt-2'>Đặc điểm nổi bật</h6>
                    <ul className="list-unstyled">
                        <li><img src="https://salt.tikicdn.com/ts/upload/81/61/d4/92e63f173e7983b86492be159fe0cff4.png"
                            width="20" height="20"/> Câu chuyện cảm động về tình yêu.</li>
                        <li><img src="https://salt.tikicdn.com/ts/upload/81/61/d4/92e63f173e7983b86492be159fe0cff4.png"
                            width="20" height="20"/> Ngôn ngữ sâu sắc, gần gũi.</li>
                        <li><img src="https://salt.tikicdn.com/ts/upload/81/61/d4/92e63f173e7983b86492be159fe0cff4.png"
                            width="20" height="20"/> Chuyển thể thành phim điện ảnh.</li>
                        <li><img src="https://salt.tikicdn.com/ts/upload/81/61/d4/92e63f173e7983b86492be159fe0cff4.png"
                            width="20" height="20"/> Kích thước nhỏ gọn.</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div className='d-flex p-3 justify-content-between align-items-center'>
                <div className='first d-flex justify-content-start gap-1'>
                    <img src="https://salt.tikicdn.com/ts/ta/d3/d4/1c/1d4ee6bf8bc9c5795529ac50a6b439dd.png" alt="icon-left" width="24" height="24"/>
                    <span><a href='#' className='text-secondary'>Xem thêm</a></span>
                    <span ><a href='#'className='text-dark'>Tóm tắt nội dung</a></span>
                </div>
                <img src={greaterImg}
                    width="15" height="18"/>
            </div>
        </div>
    )
}
export default ImageShow;