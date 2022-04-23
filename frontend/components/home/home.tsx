import HomeMenu from "./menu";

const HomePage = ({children}) => {
  return (
    <body>
        <HomeMenu />
        {children}
     </body>
  );
}

export default HomePage
