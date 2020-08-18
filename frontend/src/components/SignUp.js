import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useForm } from "react-hook-form";
import theme from "../theme";
import { useHistory } from "react-router-dom";
import axios from "../api/Config";

function Copyright() {
	return (
		<Typography variant='body2' color='textSecondary' align='center'>
			{"Copyright © "}
			<Link color='inherit' href='https://material-ui.com/'>
				MethodMelody
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	root: {
		background: theme.palette.primary.light,
		padding: theme.spacing(4, 5, 4, 5),
	},
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.contrastText,
		width: theme.spacing(10),
		height: theme.spacing(10),
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(3),
		color: theme.palette.text.secondary,
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
		background: theme.palette.secondary.contrastText,
		color: theme.palette.primary.light,
	},
	input: {
		color: theme.palette.text.secondary,
	},
}));

export default function SignUp() {
	const classes = useStyles();

	const history = useHistory();
	function navigateToLogin() {
		history.push("/login");
	}

	const { register, handleSubmit, errors } = useForm();
	const userSignUp = (data, e) => {
		const formData = new FormData();
		let name = `${data.firstName} ${data.lastName}`;
		formData.append("name", name);
		formData.append("photo", data.photo[0]);
		formData.append("age", data.age);
		formData.append("phone", data.phone);
		formData.append("address", data.address);
		formData.append("email", data.email);
		formData.append("password", data.password);

		console.log("siingi" + JSON.stringify(data));

		console.log("siingi" + formData);

		axios
			.post("user/signup/", formData, {
				headers: {
					"auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
					"Content-type": "multipart/form-data",
				},
			})
			.then((res) => {
				console.log("siingi" + res.data);
				e.target.reset();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<Container component='main' maxWidth='xs' className={classes.root}>
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography
					component='h1'
					variant='h5'
					style={{ color: theme.palette.secondary.contrastText }}
				>
					Sign up
				</Typography>
				<form
					className={classes.form}
					noValidate
					onSubmit={handleSubmit(userSignUp)}
				>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								autoComplete='fname'
								name='firstName'
								variant='outlined'
								required
								fullWidth
								id='firstName'
								label='First Name'
								InputProps={{
									className: classes.input,
								}}
								inputRef={register({ required: true })}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								variant='outlined'
								required
								fullWidth
								id='lastName'
								label='Last Name'
								name='lastName'
								autoComplete='lname'
								InputProps={{
									className: classes.input,
								}}
								inputRef={register({ required: true })}
							/>
						</Grid>
						<Grid item xs={12} sm={12}>
							<TextField
								variant='outlined'
								required
								fullWidth
								id='age'
								label='Age'
								name='age'
								autoComplete='lname'
								InputProps={{
									className: classes.input,
								}}
								inputRef={register({ required: true })}
							/>
						</Grid>
						<Grid item xs={12} sm={12}>
							<TextField
								variant='outlined'
								required
								fullWidth
								id='phone'
								label='Phone Number'
								name='phone'
								autoComplete='lname'
								InputProps={{
									className: classes.input,
								}}
								inputRef={register({ required: true })}
							/>
						</Grid>
						<Grid item xs={12} sm={12}>
							<TextField
								variant='outlined'
								required
								fullWidth
								id='address'
								label='Address'
								name='address'
								autoComplete='lname'
								InputProps={{
									className: classes.input,
								}}
								inputRef={register({ required: true })}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant='outlined'
								required
								fullWidth
								id='email'
								label='Email Address'
								name='email'
								autoComplete='email'
								color='primary'
								InputProps={{
									className: classes.input,
								}}
								inputRef={register({ required: true })}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant='outlined'
								required
								fullWidth
								name='password'
								label='Password'
								type='password'
								id='password'
								autoComplete='current-password'
								InputProps={{
									className: classes.input,
								}}
								inputRef={register({ required: true })}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								id='photo'
								name='photo'
								type='file'
								variant='outlined'
								helperText='Select image for user photo'
								InputProps={{
									className: classes.input,
								}}
								className={classes.label}
								inputRef={register({ required: true })}
							/>
						</Grid>
						<Grid item xs={12}>
							<FormControlLabel
								control={
									<Checkbox
										value='allowExtraEmails'
										style={{ color: theme.palette.secondary.contrastText }}
									/>
								}
								label='I want to receive inspiration, marketing promotions and updates via email.'
							/>
						</Grid>
					</Grid>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						color='primary'
						className={classes.submit}
					>
						Sign Up
					</Button>
					<Grid container justify='flex-end'>
						<Grid item>
							<Link
								href='#'
								variant='body2'
								style={{ color: theme.palette.secondary.contrastText }}
								onClick={navigateToLogin}
							>
								Already have an account? Sign in
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
			<Box mt={5}>
				<Copyright />
			</Box>
		</Container>
	);
}
