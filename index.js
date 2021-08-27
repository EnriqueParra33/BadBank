
function Spa() {
    return (
        <>
            <HashRouter>
                <NavBar />
                <UserContext.Provider value={
                    {
                        loggedInUser: 'enrique',
                        users:[{
                            name:'enrique',
                            email:'enriquep@badbank.com',
                            password:'password',
                            balance:1000000,
                    }]
                    }
                }>
                    <Route path="/" exact component={Home}/>
                    <Route path="/CreateAccount/" exact component={CreateAccount}/>
                    <Route path="/deposit/" exact component={Deposit}/>
                    <Route path="/withdraw/" exact component={Withdraw}/>
                    <Route path="/alldata/" exact component={AllData}/>
                </UserContext.Provider>
            </HashRouter>
        </>
    );
}

ReactDOM.render(<Spa/>, document.getElementById("root"));