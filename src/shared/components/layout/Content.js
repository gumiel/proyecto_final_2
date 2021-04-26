const Content = (props) => {
  const { children } = props;
  console.log(props);
  return <main className="container">{children}</main>
}
export default Content;