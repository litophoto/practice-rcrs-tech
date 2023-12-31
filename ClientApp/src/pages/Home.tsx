import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  TextField,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Button,
  Typography,
  Grid,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Home = () => {
  // let registeredItem: any[] = [];
  // console.log("check01");
  const [inputText, setInputText] = useState<string>("");
  const [todoList, setTodoList] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    axios
      .post("/Api/ReadAllTodoItems")
      .then((response) => {
        setTodoList(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleClick = () => {
    // const params = new URLSearchParams();
    // params.append("Id", "");
    // params.append("Content", inputText);
    // params.append("IsComplete", "false");
    // params.append("IsDeleted", "false");
    // params.append("Time", new Date().toString());
    var inputJson: TodoItem = {
      Id: null,
      Content: inputText,
      IsCompleted: false,
      IsDeleted: false,
      Time: Number(new Date()),
    };

    axios
      .post("/Api/AddTodoItem", inputJson)
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });

    // const response = axios("/Api/AddTodoItem", {
    //   method: "post",
    //   headers: { "Content-Type": "application/json" },
    //   data: JSON.stringify(inputJson),
    // });

    console.log(inputJson);
    setTodoList([...todoList, inputJson]);
    setInputText("");
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item sm={4}>
          <div>
            <Typography variant="h3" sx={{ margin: 4 }}>
              My Todo
            </Typography>
            <TextField
              id="outlined-basic"
              label="Write here!"
              variant="outlined"
              onChange={handleChange}
              value={inputText}
              sx={{ marginLeft: 5, marginRight: 2 }}
            />
            <Button variant="contained" onClick={handleClick}>
              登録
            </Button>
          </div>
        </Grid>
        <Grid item sm={8}>
          <div style={{ marginTop: 120 }}>
            {todoList != null &&
              todoList.map((item: any, key: any) => (
                <FormGroup row sx={{ marginTop: 2 }}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label={item.content}
                  />
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                </FormGroup>
              ))}
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
