import React, { Component } from "react";
import Chart from "react-apexcharts";

class Chartt extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [
                {
                    name: "Current Semester",
                    data: [31, 40, 28, 51, 42, 100, 96],
                },
                {
                    name: "Previous Semester",
                    data: [11, 32, 45, 32, 34, 52, 41],
                },
            ],
            options: {
                chart: {
                    type: "area",
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: "smooth",
                },
                tooltip: {
                    x: {
                        format: "dd/MM/yy HH:mm",
                    },
                },
                colors: ["#64748b", "#FF844B"],
            },
        };
    }

    render() {
        return (
            <Chart
                options={this.state.options}
                series={this.state.series}
                type="area"
                className="w-full lg:w-3/4"
                height="296"
            />
        );
    }
}

export default Chartt;
