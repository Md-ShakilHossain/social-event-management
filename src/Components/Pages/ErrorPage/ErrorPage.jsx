import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();

    return (
        <div className="mt-20 md:mt-24 lg:mt-36">
            <h2 className="text-4xl text-center font-bold">OOPS!!!</h2>
            <p className="text-2xl font-semibold text-center">An unexpected error ocurred.</p>
            <p className="text-center text-xl font-medium"><i>{error.statusText || error.message}</i></p>
            {
                error.status === 404 && <div>
                    <p className="text-center">
                        <i>Page not found. Error 404</i>
                    </p>
                    <div className="flex justify-center">
                        <Link to='/'><button className="btn btn-primary">Home</button></Link>
                    </div>
                </div>
            }
        </div>
    );
};

export default ErrorPage;