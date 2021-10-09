import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  background-color: ${(props) =>
    props.light ? "white" : " hsl(235, 21%, 11%)"};
`;

const BackgroundImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  @media (max-width: 375px) {
    display: none;
  }
`;

const BackgroundImgMobile = styled.img`
  display: none;
  @media (max-width: 375px) {
    display: inherit;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 475px;
  }
`;

const Box = styled.div`
  width: 600px;
  margin-top: 80px;
  z-index: 2;
  @media (max-width: 425px) {
    width: 90%;
  }
  @media (max-width: 375px) {
    margin-top: 50px;
  }
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 45px;
`;

const Title = styled.h1`
  text-transform: uppercase;
  letter-spacing: 15px;
  font-weight: 700;
  color: white;
`;

const Switch = styled.img`
  height: 25px;
  cursor: pointer;
`;

const InputBox = styled.form`
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.light ? "white" : "rgb(43,43,62)")};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 0 30px;
  border-radius: 5px;
  margin-bottom: 25px;
  position: relative;
`;

const Circle = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 100%;
  background-color: white;
  box-shadow: ${(props) => (props.light ? "rgba(0, 0, 0, 0.02)" : " #cacde824")}
      0px 1px 3px 0px,
    ${(props) => (props.light ? "rgba(27, 31, 35, 0.15)" : " #cacde82b")} 0px
      0px 0px 1px;
  background-color: ${(props) => (props.light ? "white" : " rgb(43,43,62)")};
  z-index: 2;
  cursor: ${(props) => (props.complete ? "none" : "pointer")};
`;

const Input = styled.input`
  border: 0;
  padding: 25px 20px;
  width: 100%;
  display: block;
  font-size: 18px;
  background-color: ${(props) => (props.light ? "white" : "rgb(43,43,62)")};
  color: ${(props) => (props.light ? "black" : "white")};
  z-index: 1;
  :focus {
    outline: none;
  }
`;

const Card = styled.div`
  background-color: ${(props) => (props.light ? "white" : "rgb(43,43,62)")};
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  color: ${(props) => (props.light ? "hsl(235, 19%, 35%)" : "white")};
`;

const GroupTask = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 29px;
  border-bottom: ${(props) =>
      props.light ? "hsl(236, 33%, 92%)" : "#cacde822"}
    solid 1px;
`;

const Delete = styled.img`
  display: none;
  ${GroupTask}:hover & {
    display: block;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;

const TaskBox = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.light ? "white" : "rgb(43,43,62)")};
`;

const TaskText = styled.p`
  padding: 0 20px;
  display: flex;
  align-items: center;
  line-height: 1.5;
  font-size: 18px;
  opacity: ${(props) => (props.complete ? "0.3" : "1")};
  text-decoration-line: ${(props) =>
    props.complete ? "line-through" : "none"};
  cursor: pointer;
`;

const Check = styled.img`
  height: 10px;
  width: 10px;
`;

const CircleCheck = styled.div`
  background-image: linear-gradient(135deg, #71ccff 0%, #d400ff 100%);
  border-radius: 100%;
  height: 26px;
  width: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardFooter = styled.div`
  color: ${(props) => (props.light ? "hsl(236, 9%, 61%)" : "#d2d3dbb1")};
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
`;

const FilterBox = styled.form`
  width: 180px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 425px) {
    display: none;
  }
`;

const FilterBoxMobile = styled.form`
  display: none;
  @media (max-width: 425px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => (props.light ? "white" : "rgb(43,43,62)")};
    padding: 20px 30px;
    border-radius: 5px;
    margin-top: 25px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;

const Link = styled.div`
  cursor: pointer;
  :hover {
    color: ${(props) =>
      props.light ? "hsl(235, 19%, 35%)" : "hsl(236, 33%, 92%)"};
  }
`;

const RadioLabel = styled.label`
  cursor: pointer;
  color: ${(props) =>
    props.checked
      ? "#3c5fc0"
      : props.light
      ? "hsl(236, 9%, 61%)"
      : "#d2d3dbb1"};
  :hover {
    color: ${(props) => {
      if (props.checked) return "";
      return props.light ? "hsl(235, 19%, 35%)" : "hsl(236, 33%, 92%)";
    }};
  }
`;

const Radio = styled.input`
  visibility: hidden;
`;

const defaultTasks = [
  { name: "Read for 1 hour", complete: true },
  { name: "Pick up flower", complete: false },
  { name: "10 minutes meditation", complete: false },
];

function Main() {
  const [lightMode, setLightMode] = useState(true);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(defaultTasks);
  const [filter, setFilter] = useState("all");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTasks((tasks) => [...tasks, { name: task, complete: false }]);
    setTask("");
  };

  const handleRadioChange = (e) => {
    const target = e.target;
    if (target.checked) {
      setFilter(target.value);
    }
  };

  const handleFilter = () => {
    if (filter === "completed") return tasks.filter((t) => t.complete);
    if (filter === "active") return tasks.filter((t) => !t.complete);
    return tasks;
  };

  const handleClearComplete = () => {
    const newTasks = tasks.filter((t) => !t.complete);
    setTasks(newTasks);
  };

  const handleMarkTodo = (index) => {
    const newTasks = tasks.map((t, i) => {
      if (i === index) {
        if (t.complete === true) t.complete = false;
        else t.complete = true;
      }
      return t;
    });
    setTasks(newTasks);
  };

  const handleDelete = (index) => {
    const newTasks = tasks.filter((t, i) => i !== index);
    setTasks(newTasks);
  };

  const TasksLeft = () => {
    return tasks.filter((t) => !t.complete).length;
  };

  return (
    <Container light={lightMode}>
      <BackgroundImg
        src={`img/bg-desktop-${lightMode ? "light" : "dark"}.jpg`}
        alt="bg-desktop"
      />
      <BackgroundImgMobile
        src={`img/bg-mobile-${lightMode ? "light" : "dark"}.jpg`}
        alt="bg-mobile"
      />
      <Box>
        <TitleBox>
          <Title>Todo</Title>
          <Switch
            src={`img/icon-${lightMode ? "moon" : "sun"}.svg`}
            alt="icon-switch"
            onClick={() => {
              setLightMode(!lightMode);
            }}
          />
        </TitleBox>
        <InputBox onSubmit={handleSubmit} light={lightMode}>
          <Circle light={lightMode} />
          <Input
            light={lightMode}
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Create a new Todo..."
          />
        </InputBox>
        <Card light={lightMode}>
          {handleFilter().map((action, i) => {
            return (
              <GroupTask light={lightMode} key={i}>
                <TaskBox light={lightMode}>
                  {action.complete ? (
                    <CircleCheck>
                      <Check src="/img/icon-check.svg" alt="icon-check" />
                    </CircleCheck>
                  ) : (
                    <Circle
                      light={lightMode}
                      complete={action.complete}
                      onClick={() => handleMarkTodo(i)}
                    />
                  )}
                  <TaskText
                    complete={action.complete}
                    onClick={() => handleMarkTodo(i)}
                  >
                    {action.name}
                  </TaskText>
                </TaskBox>
                <Delete
                  src="/img/icon-cross.svg"
                  alt="icon-cross"
                  onClick={() => handleDelete(i)}
                />
              </GroupTask>
            );
          })}

          <CardFooter light={lightMode}>
            <div>{`${TasksLeft()} items left`}</div>
            <FilterBox>
              <Radio
                type="radio"
                value="all"
                checked={filter === "all"}
                name="radio1"
                id="radio1"
                onChange={handleRadioChange}
              />
              <RadioLabel
                htmlFor="radio1"
                checked={filter === "all"}
                light={lightMode}
              >
                All
              </RadioLabel>
              <Radio
                type="radio"
                value="active"
                name="radio2"
                id="radio2"
                onChange={handleRadioChange}
                checked={filter === "active"}
              />
              <RadioLabel
                htmlFor="radio2"
                checked={filter === "active"}
                light={lightMode}
              >
                Active
              </RadioLabel>
              <Radio
                type="radio"
                value="completed"
                name="radio3"
                id="radio3"
                onChange={handleRadioChange}
                checked={filter === "completed"}
              />
              <RadioLabel
                htmlFor="radio3"
                checked={filter === "completed"}
                light={lightMode}
              >
                Completed
              </RadioLabel>
            </FilterBox>
            <Link onClick={handleClearComplete} light={lightMode}>
              Clear Completed
            </Link>
          </CardFooter>
        </Card>
        <FilterBoxMobile light={lightMode}>
          <Radio
            type="radio"
            value="all"
            checked={filter === "all"}
            name="radio1"
            id="radio1"
            onChange={handleRadioChange}
          />
          <RadioLabel
            htmlFor="radio1"
            checked={filter === "all"}
            light={lightMode}
          >
            All
          </RadioLabel>
          <Radio
            type="radio"
            value="active"
            name="radio2"
            id="radio2"
            onChange={handleRadioChange}
            checked={filter === "active"}
          />
          <RadioLabel
            htmlFor="radio2"
            checked={filter === "active"}
            light={lightMode}
          >
            Active
          </RadioLabel>
          <Radio
            type="radio"
            value="completed"
            name="radio3"
            id="radio3"
            onChange={handleRadioChange}
            checked={filter === "completed"}
          />
          <RadioLabel
            htmlFor="radio3"
            checked={filter === "completed"}
            light={lightMode}
          >
            Completed
          </RadioLabel>
        </FilterBoxMobile>
      </Box>
    </Container>
  );
}

export default Main;
