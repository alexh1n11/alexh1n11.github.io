import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "./page/Page";

const Router = ({rootWidth} ) => {
 return(
    <BrowserRouter>
        <Routes>
            <Route element={<Page rootWidth={rootWidth}/>} path="/" />
            <Route path="*" element =
            {
            <div style={
                {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh'
                }
            }>
                Not Found
            </div>
            } />
        </Routes>
    </BrowserRouter>
 )
}

export default Router