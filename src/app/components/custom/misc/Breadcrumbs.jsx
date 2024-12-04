import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "/src/app/components/ui/breadcrumb";
import { Link, useLocation } from "react-router-dom";
import { formatCrumb } from "/src/app/utilities/filters";
import { Fragment } from "react";
function isValidBreadcrumb(text){
  return text !== "" && !(/^\d+$/.test(text));
}

export default function Breadcrumbs() {
  const location = useLocation();
  const breadcrumbs = location.pathname.split("/").filter(isValidBreadcrumb);
  const breadcrumbPage = breadcrumbs.pop();
  let currentLink = "";
  const breadcrumbItems = breadcrumbs.map((crumb) => {
    currentLink += `/${crumb}`;
    return (
      <Fragment
        key={crumb}
      >
        <BreadcrumbItem key={crumb}>
          <Link to={currentLink}>
            {formatCrumb(crumb)}
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
      </Fragment>
    );
  });

  return breadcrumbItems.length > 0 && (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbItems}
        <BreadcrumbItem>
          {breadcrumbPage && (
            <BreadcrumbPage>{formatCrumb(breadcrumbPage)}</BreadcrumbPage>
          )}
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
