import React, { useState } from "react";
import { Avatar, Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material";
import ChatHistory from "./ChatHistory";

const Sidebar = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);  // State to control modal
  const [selectedCompanies, setSelectedCompanies] = useState([]);

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleCompanySelect = (company) => {
    setSelectedCompanies((prev) => {
      // Toggle company in the list
      if (prev.includes(company)) {
        return prev.filter((item) => item !== company);
      } else {
        return [...prev, company];
      }
    });
  };

  return (
    <div className="sidebar">
      <div className="profile">
        <Avatar src="/profile-pic.jpg" />
        <h3>Komal Negah</h3>
      </div>

      <div className="favorites">
        <h4 onClick={handleDialogOpen}>⭐ Favorite Companies</h4>
        <ul>
          {selectedCompanies.length === 0 ? (
            <li></li>
          ) : (
            selectedCompanies.map((company, index) => <li key={index}>{company} ⭐</li>)
          )}
        </ul>
      </div>

      <div className="chat-history">
        <ChatHistory />
      </div>

      {/* Dialog to select favorite companies */}
      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Select Favorite Companies</DialogTitle>
        <DialogContent>
          <ul>
            <li>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCompanies.includes("Apple")}
                  onChange={() => handleCompanySelect("Apple")}
                />
                Apple
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCompanies.includes("Microsoft")}
                  onChange={() => handleCompanySelect("Microsoft")}
                />
                Microsoft
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCompanies.includes("Tesla")}
                  onChange={() => handleCompanySelect("Tesla")}
                />
                Tesla
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCompanies.includes("Amazon")}
                  onChange={() => handleCompanySelect("Amazon")}
                />
                Amazon
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCompanies.includes("Google")}
                  onChange={() => handleCompanySelect("Google")}
                />
                Google
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCompanies.includes("Meta")}
                  onChange={() => handleCompanySelect("Meta")}
                />
                Meta
              </label>
            </li>
          </ul>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Sidebar;
