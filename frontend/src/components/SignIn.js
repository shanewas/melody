import React, { useState } from "react";
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
import auth from "../routes/auth";
import axios from "../api/Config";
import "../theme";
import theme from "../theme";
import { useHistory } from "react-router-dom";

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
		marginTop: theme.spacing(1),
		color: theme.palette.text.secondary,
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
		background: theme.palette.secondary.contrastText,
		color: theme.palette.primary.light,
	},
	label: {
		"&:focus": {
			color: theme.palette.text.secondary,
		},
		"&:active": {
			color: theme.palette.text.secondary,
		},
	},
	input: {
		color: theme.palette.text.secondary,
	},
}));

export default function SignIn() {
	const classes = useStyles();

	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);

	const history = useHistory();
	function navigateToSignup() {
		history.push("/signup");
	}

	const userLogin = (data) => {
		axios
			.post("user/login/", data, {
				headers: {
					"auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
					"Content-type": "application/json",
				},
			})
			.then((res) => {
				auth.login(
					res.data.v_token,
					res.data.email,
					res.data.name,
					res.data.id,
					res.data.course,
				);
			})
			.catch((res) => {
				auth.logout();
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
					Sign in
				</Typography>
				<form className={classes.form} noValidate>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						id='email'
						label='Email Address'
						name='email'
						autoComplete='email'
						className={classes.label}
						InputProps={{
							className: classes.input,
						}}
						onChange={(event) => {
							setEmail(event.target.value);
						}}
					/>
					<TextField
						variant='outlined'
						margin='normal'
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
						onChange={(event) => {
							setPassword(event.target.value);
						}}
					/>
					<FormControlLabel
						control={
							<Checkbox
								value='remember'
								style={{ color: theme.palette.secondary.contrastText }}
							/>
						}
						label='Remember me'
					/>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						color='primary'
						className={classes.submit}
						onClick={() => {
							userLogin({ email, password });
							history.push("/");
						}}
					>
						Sign In
					</Button>
					<Grid container>
						<Grid item xs>
							<Link
								href='#'
								variant='body2'
								style={{ color: theme.palette.secondary.contrastText }}
							>
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link
								href='#'
								variant='body2'
								style={{ color: theme.palette.secondary.contrastText }}
								onClick={navigateToSignup}
							>
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
			<Box mt={8}>
				<Copyright />
			</Box>
		</Container>
	);
}
