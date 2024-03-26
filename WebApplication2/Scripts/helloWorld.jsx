class HelloWorld extends React.Component {
    render() {
        return (<><h1>My First ReactJS App!</h1><a href="http://localhost:23882/About">About</a></>);
    }
}
ReactDOM.render(
    <HelloWorld />,
    document.getElementById('dvMessage')
); 