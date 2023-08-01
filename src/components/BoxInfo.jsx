import './style/BoxInfo.css'
const BoxInfo = ({handleClick, dataB}) => {
    return (
    <section className='container-box'>
        <div className='title'>
            <h1>InfoGalax</h1>
        </div>

        <section>

            <div className='box-btn'>
                <button className='btn' onClick={handleClick}> <i class='bx bx-revision'></i>   </button>
            </div>
            <article className='box-phrase'>
                <div className='bg-phrase'></div>
                <p>
                        <b>{dataB.phrase}</b> 
                </p>
            </article>
            
        </section>
            <footer className='box-footer'>
                <div className='planet-footer'></div>
                    <h4> 
                        Fuente: {dataB.author} 
                    </h4>
            </footer>
        </section>
    )
}
export default BoxInfo