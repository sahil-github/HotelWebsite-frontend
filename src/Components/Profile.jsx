
import { Card } from "@mui/material";
import { m } from "framer-motion";
import { useEffect, useState } from "react";

export default function Profile() {

  const [users, setUser] = useState([])



  useEffect(() => {
    fetch('https://fakestoreapi.com/users')
      .then(response => response.json())
      .then(data => setUser(data));


  }, [])

  return (
    <>
      <Card sx={{ display: "flex", justifyContent: "center", borderRadius: "2px", height: "100vh", p: "50px" }}>
        {
          users.map((user, index) => (
            index === 0 && (
              <>
                <Card key={index} sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "70vh", width: "100vh", bgcolor: "gray", p: "20px", m: "20px" }}>
                  <h3>{user.name.firstname}</h3>
                  <h4>{user.email}</h4>
                </Card >
              </>
            )
          )
          )
        }
      </Card >
    </>
  );
}
