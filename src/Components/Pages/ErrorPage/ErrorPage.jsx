import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();

    return (
        <div className="mt-20 p-5 md:mt-24 lg:mt-36 border md:shadow-teal-200 shadow-2xl">
            <div className="w-64 space-y-4 rounded-3xl py-4 mx-auto border md:shadow-teal-200 shadow-2xl ">
                <h2 className="text-4xl text-center font-bold">OOPS!!!</h2>
                <p className="text-2xl font-semibold text-center">An unexpected error ocurred.</p>
                <p className="text-center text-xl font-medium"><i>{error.statusText || error.message}</i></p>
                {
                    error.status === 404 && <div>
                        <p className="text-center text-red-500">
                            <i>Page not found. Error 404</i>
                        </p>
                        <div className="flex justify-center">
                            <Link to='/'><button className="btn btn-primary mt-2">Home</button></Link>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default ErrorPage;