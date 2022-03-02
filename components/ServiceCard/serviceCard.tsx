// react
import { FC } from "react";

// mui
import { CardContent, Grid, Card, Typography, Box } from "@material-ui/core";

// utils
import type { Data } from "../../utils/types";

export interface ServiceCardProps {
	service: Data.Event["service"];
}

const ServiceCard: FC<ServiceCardProps> = ({ service }) => {
	return (
		<Box component={Card} height="100%">
			{/* <Card> */}
			<CardContent>
				<Grid container spacing={1}>
					<Grid item xs={3}></Grid>
					<Grid item xs={3}>
						<Typography align="center">
							<Box component="span" fontWeight="bold">
								Nb
							</Box>
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<Typography align="center">
							<Box component="span" fontWeight="bold">
								Temps
							</Box>
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<Typography align="center">
							<Box component="span" fontWeight="bold">
								Prix
							</Box>
						</Typography>
					</Grid>

					<Grid item xs={3}>
						<Typography align="center">Cusinier</Typography>
					</Grid>
					<Grid item xs={3}>
						<Typography align="center">{service.cooksN}</Typography>
					</Grid>
					<Grid item xs={3}>
						<Typography align="center">{service.cooksDuration}</Typography>
					</Grid>
					<Grid item xs={3}>
						<Typography align="center">??</Typography>
					</Grid>

					<Grid item xs={3}>
						<Typography align="center">Serveur</Typography>
					</Grid>
					<Grid item xs={3}>
						<Typography align="center">{service.serversN}</Typography>
					</Grid>
					<Grid item xs={3}>
						<Typography align="center">{service.serversDuration}</Typography>
					</Grid>
					<Grid item xs={3}>
						<Typography align="center">??</Typography>
					</Grid>
					<Grid item xs={12} container>
						<Grid item xs></Grid>
						<Grid item xs>
							<Typography align="center">
								<Box component="span" fontWeight="bold">
									Total: CHF ??
								</Box>
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</CardContent>
			{/* </Card> */}
		</Box>
	);
};

export default ServiceCard;