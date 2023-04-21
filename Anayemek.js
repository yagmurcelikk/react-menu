
import { anayemek, anayemek_aciklama, anayemek_resim, anayemek_fiyat } from './Icerikler';
import { sepeteEkle } from './Function';
import { sepetiGoster } from './Function';

const stil = {
    image: {
        boxShadow: '15px 5px 15px #888888',
        borderRadius: '20%',
    }
};

function Anayemek() {

    return (
        <>
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '35px' }}>
                    {anayemek.map((yemek, index) => (
                        <div key={index} style={{ width: '300px' }}>
                            <h3><i>{yemek}</i></h3>

                            <div className='row' >
                                <div className='col'>
                                    <img src={anayemek_resim[index]} alt={yemek} className="image" style={stil.image} />
                                </div>
                            </div>

                            <div className='row' >
                                <div className='col'>
                                    <p className='py-2'><i>{anayemek_aciklama[index]}</i></p>
                                </div>
                            </div>

                            <div >
                                <button className="btn btn-outline-secondary py-1 px-3" onClick={() => { sepeteEkle(yemek, anayemek_fiyat[index]); sepetiGoster(); }}>Sepete Ekle</button>
                                <span style={{marginLeft:'100px'}}>{anayemek_fiyat[index]}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



        </>
    );

}

export default Anayemek;

