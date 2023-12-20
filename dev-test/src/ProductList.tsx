import React from "react";
import { Link } from "react-router-dom";

export function ProductList() {
  return (
    <div>
      <button>
        {
          <Link to="/uploadproduct" className="text-4xl font-medium text-blue-600 dark:text-blue-500 hover:underline">
            Uplode
          </Link>
        }
      </button>
    </div>
  );
}
