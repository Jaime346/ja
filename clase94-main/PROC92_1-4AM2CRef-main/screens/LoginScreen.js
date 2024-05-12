constructor(props) {
    super(props);
    this.state = {
        email: "",
        password: "",
    };
}
handleLogin = (email, password) => {
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() =>{
        this.props.navigation.navigate("BottomTab");
    })
    .catch(error =>{
   Alert.alert(error.message);
    });
};