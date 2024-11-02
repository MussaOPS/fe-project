import logo from '../../../assets/header/logo.png';

const BottomSection = () => {
    return (
        <div className="flex justify-between">
            <div>
                <img src={logo} alt="logo"/>
                <button>Click</button>
            </div>

            <div>
                <input type="text" placeholder="Search"/>
            </div>

            <div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
}

export default BottomSection;
