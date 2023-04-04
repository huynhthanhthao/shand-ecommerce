const headerConfig = () => {
    const accountStore = localStorage.getItem("persist:root");
    const token = JSON.parse(JSON.parse(accountStore)?.accountReducer ?? "null")?.account?.token;
    return { Authorization: "Bearer " + token };
};

export default headerConfig;
