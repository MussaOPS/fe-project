import balance from '../../../assets/header/balance.svg';

const TopSection = () => {
    return (
        <div className="flex justify-between mb-0.5">
            <div>
                <ul className="">
                    <li>
                        <a href="#">Address</a>
                    </li>
                    <li>
                        <a href="#">For sellers</a>
                    </li>
                    <li>
                        <a href="#">Vacancies</a>
                    </li>
                </ul>
            </div>

            <div>
                <div>
                    <img src={balance} alt={"balance"}/>
                    <a>Balance</a>
                </div>

                <select>
                    <option>KZT</option>
                    <option>USD</option>
                    <option>AED</option>
                </select>
            </div>
        </div>
    );
}

export default TopSection;
