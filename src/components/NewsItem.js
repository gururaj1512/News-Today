import React from 'react'

const NewsItem = (props) => {
        let { title, description, imageUrl, newsUrl, source } = props;

        const btnStyle = {
            width: '100%',
            height: '3rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingTop: '8px',
            fontSize: '20px'
        };

        return (

            <div className='my-3 bg-light' >
                <div className="card" style={{ width: '100%', height: '30rem', border: '1px solid #eeeeee'}}>
                    <div style={{ height: '15rem', backgroundColor: 'black', display: 'flex' }}>
                        <span className='position-absolute badge roundes pill bg-success text-light' style={{ left: '0%', top: '0%', borderRadius: '4px 0px 5px 0', fontFamily: 'sans-serif' }}>{source}</span>
                        <img src={!imageUrl ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDBrK0BIdaBRc3lgqY_j1UPyxGUP49PPRQMZG5h1-6YBO1b7eS2Uj8-A451oy2cQaX43s&usqp=CAU" : imageUrl} className="card-img-top" alt="..." style={{ maxHeight: '15rem', alignItems: 'center'}} />
                    </div>
                    <div className="card-body flex">
                        <h5 className="card-title" style={{ fontSize: '16px', textAlign: 'center' }}>{title}</h5>
                        <hr style={{ textAlign: 'center', margin: '7' }} />
                        <p className="card-text" style={{ fontSize: '14px', textAlign: 'center' }}>{description}</p>
                    </div>
                    <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-primary btn-sm" style={btnStyle}>Read News</a>
                </div>
            </div>
        )
}

export default NewsItem
