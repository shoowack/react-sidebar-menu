const menuItems = [
  {
    icon: "fa fa-home",
    text: "Home",
    url: "#"
  },
  {
    icon: "fa fa-calendar",
    text: "Events",
    disabled: true,
    submenu: [
      { text: "Overview", url: "#", icon: "fa fa-calendar" },
      { text: "Invitation Accounts", url: "#" },
      { text: "Pass Buyers", url: "#" },
      { text: "Participants", url: "#" },
      { text: "Applicants", url: "#" },
      { text: "Attendees", url: "#" },
      { text: "Pass Management", url: "#" },
      { text: "Edition Configuration", url: "#" }
    ]
  },
  {
    icon: "fa fa-handshake-o",
    text: "Users",
    disabled: true,
    url: "#"
  },
  {
    icon: "fa fa-handshake-o",
    text: "Groups",
    url: "#"
  },
  {
    icon: "fa fa-window-restore",
    text: "Interface",
    submenu: [
      { text: "Alerts", url: "#" },
      { text: "Typography", url: "#" },
      { text: "Badges", url: "#" },
      { text: "Buttons", url: "#" },
      { text: "Grid", url: "#" },
      { text: "Modals", url: "#" },
      { text: "Progress", url: "#" },
      { text: "Range Sliders", url: "#" },
      { text: "Tabs", url: "#" },
      { text: "Tooltips", url: "#" },
      { text: "Forms", url: "#" },
      { text: "Tables", url: "#" },
      { text: "Maps", url: "#" }
    ]
  }
];

export default menuItems;
