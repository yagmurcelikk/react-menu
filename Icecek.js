import { icecek, icecek_resim, icecek_fiyat } from './Icerikler';
import { sepeteEkle } from './Function';
import { sepetiGoster } from './Function';

const stil = {
    image: {
        boxShadow: '15px 5px 15px #888888',
        borderRadius: '20%',
    }
};


function Icecek() {


    return (
        <>
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '35px' }}>
                    {icecek.map((yemek, index) => (
                        <div key={index} style={{ width: '300px' }}>
                            <h3><i>{yemek}</i></h3>
                            <div className='row' >
                                <div className='col'>
                                    <img src={icecek_resim[index]} alt={yemek} className="image" style={stil.image} />
                                </div>
                            </div>

                            <div className='row' >
                                <div className='col'>
                                    <p className='py-2'><i></i></p>
                                </div>
                            </div>
                            
                            <div>
                                <button className="btn btn-outline-secondary py-1 px-3" onClick={() => { sepeteEkle(yemek, icecek_fiyat[index]); sepetiGoster(); }}>Sepete Ekle</button>
                                <span style={{marginLeft:'100px'}}>{icecek_fiyat[index]}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Icecek;
