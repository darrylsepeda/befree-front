import { Component } from "react";
import "../style.css";

class AuthLayout extends Component {
  render() {
    return (
      <main className="bg-red-400 w-full h-screen flex justify-center items-center">
        <div
          id="section-auth"
          className="bg-white rounded  flex flex-col justify-center items-center"
        >
          <div className="flex flex-row justify-between items-center m-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
              <defs>
                <linearGradient
                  x1="0"
                  y1="-21.333"
                  y2="85.333"
                  id="A"
                  x2="64"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#fc8181" offset="0%" />
                  <stop stopColor="#e53e3e" offset="100%" />
                </linearGradient>
              </defs>
              <path
                d="M16 25.6c2.133-8.533 7.467-12.8 16-12.8 12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8C61.867 27.733 56.533 32 48 32c-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8zM0 44.8C2.133 36.267 7.467 32 16 32c12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8-2.133 8.533-7.467 12.8-16 12.8-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8z"
                fill="url(#A)"
                fillRule="evenodd"
              />
            </svg>
            <p className="font-bold text-red-500 text-xl uppercase italic">
              befree
            </p>
          </div>
          {this.props.children}
        </div>
      </main>
    );
  }
}

export default AuthLayout;
