import { header_icerik } from "./Icerikler";
import NavList from "./Navlist";
import { goster } from "./Function";


function Header() {

    return (
        <>
            <header>
                <div class="px-3 py-2 text-bg-dark">
                    <div class="container">
                        <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                            {header_icerik.map((eleman, index) =>
                            (<NavList
                                menuElemani={eleman}
                                tiklandiginda={() => goster(eleman, index)}
                            />)
                            )}

                        </ul>
                    </div>
                </div>
            </header>
        </>

    );
}
export default Header;