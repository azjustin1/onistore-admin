import React from "react";
import {
	Area,
	AreaChart,
	Bar,
	BarChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import "./Dashboard.css";
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
