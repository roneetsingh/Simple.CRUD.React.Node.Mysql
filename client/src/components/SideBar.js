import './SideBar.css';

const SideBar = () => {
    return(
        <>
            <div className="wrapper">
        
        <div className="sidebar">
          <pre className="SideText">Dashboard
          <br/>
          <br/>
          <br/>
          + Company Management
          <br/>
          <br/>
          <br/>
          + User Management
          <br/>
          <br/>
          <br/>
          + License Management
          <br/>
          <br/>
          <br/>
          - Sub-Agent Management
            <pre className="SideText"> <a className="Create">Create New Sub-Agent</a>
            <br/> View Sub-Agents
            <br/> Set Prices for Sub-Agent
            <br/> Recharge Sub-Agent
            <br/> Modify Sub-Agent
            </pre>
            <br/>
            <br/>
            <br/>
            +  Personal Center

          </pre>
        </div>

    </div>
        </>
    )
}

export default SideBar;