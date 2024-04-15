"use client";
import React from "react";
import Addtodo from "@/components/Addtodo";
import Displaytodo from "@/components/Displaytodo";

function TodoPage() {
  return (
    <div className="main-page wavy-background">
      <Addtodo />
      <Displaytodo />
    </div>
  );
}

export default TodoPage;
