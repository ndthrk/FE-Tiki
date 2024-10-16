const Description = ({description}) => {
    return (
        <div className='card bg-white'>
            <div className='card-body'>
                <h4 className='card-title fw-bold'>Mô tả sản phẩm</h4>
                <div className='card-img-top'>
                    <img src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg" 
                        style={{ width: '100%'} }/>
                </div>
                <div className='card-text' 
                dangerouslySetInnerHTML=
                {{ __html: description.replace(/<img/g, `<img style="width: 100%;"`) }}></div>
            </div>
        </div>
    )
}

export default Description