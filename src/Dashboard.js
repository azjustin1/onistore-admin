import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./Dashboard.css";
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	BarChart,
	Bar,
} from "recharts";

import { data } from "./data";

function Dashboard() {
	return (
		<div className="dashboard">
			<div
				style={{
					width: "500px",
					height: "300px",
					margin: "10px",
					backgroundColor: "red",
				}}>
				<ResponsiveContainer width="100%" height="100%">
					<AreaChart
						width={500}
						height={400}
						data={data}
						margin={{
							top: 10,
							right: 30,
							left: 0,
							bottom: 0,
						}}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Area
							type="monotone"
							dataKey="uv"
							stroke="#8884d8"
							fill="#8884d8"
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
			<div
				style={{
					width: "500px",
					height: "300px",
					margin: "10px",
					backgroundColor: "red",
				}}>
				<ResponsiveContainer width="100%" height="100%">
					<BarChart width={150} height={40} data={data}>
						<Bar dataKey="uv" fill="#8884d8" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}

export default Dashboard;
