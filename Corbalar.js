
import { corbalar, corbalar_resim, corbalar_fiyat } from './Icerikler';
import { sepeteEkle } from './Function';
import { sepetiGoster } from './Function';

const stil = {
    image: {
        boxShadow: '15px 5px 15px #888888',
        borderRadius: '20%',
    }
};

function Corbalar() {

    return (
        <>
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '35px' }}>
                    {corbalar.map((yemek, index) => (
                        <div key={index} style={{ width: '300px' }}>
                            <h3><i>{yemek}</i></h3>

                            <div className='row' >
                                <div className='col'>
                                    <img src={corbalar_resim[index]} alt={yemek} className="image" style={stil.image} />
                                </div>
                            </div>

                            <div className='row' >
                                <div className='col'>
                                    <p className='py-2'><i></i></p>
                                </div>
                            </div>

                            <div>
                                <button className="btn btn-outline-secondary py-1 px-3" onClick={() => { sepeteEkle(yemek, corbalar_fiyat[index]); sepetiGoster(); }}>Sepete Ekle</button>
                                <span style={{marginLeft:'100px'}}>{corbalar_fiyat[index]}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



        </>
    );

}

export default Corbalar;

