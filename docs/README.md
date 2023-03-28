<div align="center">
    <img title="" src="assets/5fe71b7e398ad3d45f733278ed4bceff0e031a57.png" alt="" >
</div>

<div align="center">
    <b> <h1> ML Dashboard UI Knowledge Transfer 💡 </h1> </b>
</div>

### Project Stack

1. front-end Application temporarily hosted on [vercel](https://ml-dashboard.vercel.app/) 
   
   1. React
   2. Typescript
   3. Tailwindcss
   4. Redux Toolkit
   5. Apex charts



Main React App components

# 1. Sidebar

background color - #12162e

### 1.1 Extending & Collapsing sidebar on mouse hover.

redux is used to maintain the 2 important states of the sidebar to make this extending functionality work.

1.  a boolean value called `isOpen` which has the default value of false because the sidebar collapsed by default

2. `width` width of the sidebar on extended and collapsed state

the above two states handled by the sidebarSlice with openSidebar and closeSidebar reducers. so the main idea is to dispatch the openSidebar onMouseEnter and closeSidebar onMouseLeave

 `Add video here`



# 2. Dashboard

# 2.1 Productivity

all graphs are implemented using apex charts

component name `GraphCard`

| Prop name | Type              | Default  | Description                                                                         |
| --------- | ----------------- | -------- | ----------------------------------------------------------------------------------- |
| GraphComp | React.ElementType | Required | apex chart component                                                                |
| h1Type    | number            |          | type of main heading(one of : 1, 2)                                                 |
| h2        | string            | optional | sub heading text                                                                    |
| colSpan   | string            |          | tailwind utility class name to tell how many coloumn the graphCard should take/span |

# 2.2 Incentives

This Incentives table implemented with only css (grid). in future you can consider React Tables for better user/developer experience.

table headers and table data rendered separately

headers rendered by map through the `headersLabels` array

table data rendered by map throught the `data` array
