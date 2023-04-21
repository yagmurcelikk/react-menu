function NavList(props) {


    return (

        <div className="row m-2">
            <li>
                <a href="#" className="btn btn-outline-secondary" onClick={props.tiklandiginda}
                >
                    {props.menuElemani}

                </a>
            </li >
            
        </div>

    );
}
export default NavList;