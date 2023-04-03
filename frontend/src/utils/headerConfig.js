const headerConfig = () => {
    const accountStore = localStorage.getItem("persist:root");
    if (JSON.parse(JSON.parse(accountStore).accountReducer).account) {
        const token = JSON.parse(JSON.parse(accountStore).accountReducer).account.token;
        return { Authorization: "Bearer " + token };
    }
    return {};
};

export default headerConfig();
